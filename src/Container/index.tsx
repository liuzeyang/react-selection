import React, { useEffect, useRef, useState } from 'react';
import './index.less';
import { PopPluginRef } from './Plugins/pop';
import { Config, Editor } from './Engine/editor';
import { RenderInBody } from './Plugins/renderInBody';
import { checkVisiblePlugin } from './utils';

type Selections = Selection | null;
interface ContainerProps {
  id: string;
  config: Config;
  html: any;
  onSelect?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    selection: Selections,
  ) => void;
  onChange?: (data: string, editor: Editor) => void;
  onContainerClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    editor: Editor,
  ) => void;
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
  const [editor] = useState<Editor>(new Editor());

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
    editor.hooks.beforeExecute.tap('editor', () => {
      const dom = divRef.current;
      dom?.setAttribute('style', 'display: none');
    });
    editor.hooks.execute.tap('editor', () => {
      window.getSelection()?.removeAllRanges();
    });
    return () => {
      if (ele !== null && editor.observer !== null) {
        editor.observer.disconnect();
      }
    };
  }, [config, onChange]);

  const onMouseDown = () => {
    window.getSelection()?.removeAllRanges();
  };

  // 控制range以及buttonview
  const onMouseUp = (e: any) => {
    e.stopPropagation();
    const selection: Selections = document.getSelection();
    const dom = divRef.current;
    if (selection?.isCollapsed) {
      dom?.setAttribute('style', 'visibility:hidden;');
      rangeRef.current = null;
    } else {
      console.log(selection);

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
      // selection && selection.removeAllRanges(); // 这个remove还是很重要的
    }
    onContainerClick && onContainerClick(e, editor);
  };
  // 处理 删除元素问题保留一个p
  const onkeydownInEditable = (e: KeyboardEvent) => {
    if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Paste') {
      if ('<p><br></p>' === editor.getData().trim()) e.preventDefault();
    }
  };

  const onDocumentMouseUp = () => {
    const dom = divRef.current;
    dom?.setAttribute('style', 'visibility:hidden;');
  };

  useEffect(() => {
    let ele = document.getElementById(id);
    if (ele !== null && checkVisiblePlugin(editor)) {
      ele.addEventListener('keydown', onkeydownInEditable);
      ele.addEventListener('mousedown', onMouseDown);
      ele.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mouseup', onDocumentMouseUp);
    }

    return () => {
      ele?.removeEventListener('keydown', onkeydownInEditable);
      ele?.removeEventListener('mousedown', onMouseDown);
      ele?.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseup', onDocumentMouseUp);
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
