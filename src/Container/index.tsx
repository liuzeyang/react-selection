import React, { useEffect, useRef, useState } from 'react';
import './index.less';
import { PopPluginRef } from './Plugins/pop';
import { Config, Editor } from './Engine/editor';
import { RenderInBody } from './Plugins/renderInBody';

type Selections = Selection | null;
export type Evt =
  | React.MouseEvent<HTMLDivElement>
  | React.KeyboardEvent<HTMLDivElement>;
interface ContainerProps {
  id: string;
  config: Config;
  html: any;
  onSelect?: (e: Evt, selection: Selections) => void;
  onChange?: (data: string) => void;
  onInit: (editor: Editor) => void;
}

/**
 *
 * @param id
 * @param value
 * @param onSelect
 * @param onInit
 * @param configs
 */

const Container: React.FC<ContainerProps> = ({
  id,
  onSelect,
  onChange,
  config,
  html,
  onInit,
}) => {
  // 控制pop
  const divRef = React.createRef<HTMLDivElement>();
  const rangeRef = useRef<any>(null);
  const [editor, setEditor] = useState<Editor>(new Editor());

  useEffect(() => {
    document.execCommand('defaultParagraphSeparator', false, 'p');
    onInit && onInit(editor);
    editor.init(config);
  }, []);

  useEffect(() => {
    let ele = document.getElementById(id) as any;
    let observer: MutationObserver;
    // 绑定observer 以及 ele
    if (ele !== null) {
      editor.setEle(ele);
      observer = new MutationObserver((mutations, mutationObserver) => {
        config.observer &&
          config.observer.callback(mutations, mutationObserver);
        onChange && onChange(editor.getData());
      });
      observer.observe(
        ele,
        config?.observer?.options ?? {
          attributes: true,
          characterData: true,
          childList: true,
          subtree: true,
          attributeOldValue: true,
          characterDataOldValue: true,
        },
      );
      editor.setObserver(observer);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [config, onChange]);

  useEffect(() => {
    let ele = document.getElementById(id) as any;

    if (ele !== null) {
      // 实现类似onchange 无法监控到range变化
      // (document.getElementById(id) as any).addEventListener('input', (e: Evt) => {
      //   onChange && onChange(e, editor.getData())
      // })
      ele.onmousedown = (e: Evt) => {};
      // 控制range以及buttonview
      ele.onmouseup = (e: Evt) => {
        e.stopPropagation();
        const selection: Selections = document.getSelection();
        const dom = divRef.current;
        if (selection?.isCollapsed) {
          dom?.setAttribute('style', 'display: none');
        } else {
          let range = selection?.getRangeAt(0);
          rangeRef.current = range;
          editor.setRange(range ?? null);
          dom?.setAttribute(
            'style',
            `display: block;top: ${(e as any).clientY}px;left:${(e as any)
              .clientX -
              ((dom?.innerText.length ?? 0) * 14 + 12) / 2}px`,
          );
          onSelect && onSelect(e, selection);
          // selection && selection.removeAllRanges(); // 这个remove还是很重要的
        }
      };
      document.onmouseup = () => {
        const dom = divRef.current;
        dom?.setAttribute('style', 'display: none');
      };
    }

    return () => {
      ele.onmouseup = () => {};
      document.onmouseup = () => {};
    };
  }, [id, onInit, config]);

  return (
    <div className="selection-backmark">
      <div
        id={id}
        className="selection-container"
        contentEditable={true}
        spellCheck={true}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
      <RenderInBody>
        <PopPluginRef ref={divRef} currentRange={rangeRef} editor={editor} />
      </RenderInBody>
    </div>
  );
};

export default Container;
