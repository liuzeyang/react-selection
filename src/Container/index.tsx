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
  onChange?: (data: string, editor: Editor) => void;
  onContainerClick?: (e: Evt, editor: Editor) => void;
  onInit?: (editor: Editor) => void;
}

/**
 * @param id
 * @param config
 * @param html
 * @param onSelect
 * @param onChange
 * @param onContainerClick
 * @param onInit
 */

const Container: React.FC<ContainerProps> = ({
  id,
  onSelect,
  onChange,
  onContainerClick,
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
    if (ele !== null && editor.observer === null) {
      editor.setEle(ele);
      observer = new MutationObserver((mutations, mutationObserver) => {
        console.log(mutations);
        config.observer &&
          config.observer.callback(mutations, mutationObserver);
        onChange && onChange(editor.getData(), editor);
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
    editor.hooks.execute.tap('editor', () => {
      const dom = divRef.current;
      dom?.setAttribute('style', 'display: none');
    });
  }, [config, onChange]);

  useEffect(() => {
    let ele = document.getElementById(id) as any;

    if (ele !== null) {
      // 实现类似onchange 无法监控到range变化
      // (document.getElementById(id) as any).addEventListener('input', (e: Evt) => {
      //   onChange && onChange(e, editor.getData())
      // })
      ele.onmousedown = (e: Evt) => {};
      // 处理 删除元素问题保留一个p
      function onkeydownInEditable(e: KeyboardEvent) {
        if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Paste') {
          if ('<p><br></p>' === editor.getData().trim()) e.preventDefault();
        }
      }

      ele.addEventListener('keydown', onkeydownInEditable);
      // 控制range以及buttonview
      ele.onmouseup = (e: Evt) => {
        e.stopPropagation();
        const selection: Selections = document.getSelection();
        const dom = divRef.current;
        if (
          selection?.isCollapsed ||
          rangeRef.current === selection?.getRangeAt(0)
        ) {
          dom?.setAttribute('style', 'visibility:hidden;');
          rangeRef.current = null;
        } else {
          let range = selection?.getRangeAt(0);
          let rect = range && range.getBoundingClientRect();
          if (rect) {
            rangeRef.current = range;
            editor.setRange(range ?? null);
            dom?.setAttribute(
              'style',
              `visibility:visible;top: ${rect?.top +
                rect?.height}px;left:${rect?.left - dom.offsetWidth / 2}px`,
            );
            onSelect && onSelect(e, selection);
          }
          onContainerClick && onContainerClick(e, editor);
          // selection && selection.removeAllRanges(); // 这个remove还是很重要的
        }
      };
      document.onmouseup = () => {
        const dom = divRef.current;
        dom?.setAttribute('style', 'visibility:hidden;');
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
