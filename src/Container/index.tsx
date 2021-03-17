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

  //
  useEffect(() => {
    if (document.getElementById(id) !== null) {
      (document.getElementById(id) as any).onmousedown = (e: Evt) => {};
      (document.getElementById(id) as any).onmouseup = (e: Evt) => {
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
      (document.getElementById(id) as any).onmouseup = () => {};
      document.onmouseup = () => {};
    };
  }, [id, onInit, config]);

  return (
    <div className="selection-backmark" style={{ height: 400 }}>
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
