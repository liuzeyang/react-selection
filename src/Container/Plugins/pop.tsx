import './pop.less';
import React, { forwardRef } from 'react';
import { Editor } from '../Engine/editor';
import { ButtonView } from '../Engine/buttonView';
import { isObject } from '../Engine/utils';

export interface PopProps {
  editor: Editor;
  propsRef?: React.ForwardedRef<HTMLDivElement>;
  currentRange?: any;
}

const PopPlugin: React.FC<PopProps> = ({ propsRef, currentRange, editor }) => {
  return (
    <div className="jason-design-pop-plugin" ref={propsRef}>
      <div className="jason-design-pop-content">
        <div className="jason-design-pop-arrow"></div>
        {editor.buttonView.map((button: ButtonView) => {
          if (button.visible === false) {
            return null;
          }
          return (
            <div
              className="jason-design-pop-inner-content"
              key={button?.Tconfig?.label?.toString()}
              onMouseDown={e => {
                isObject(currentRange.current);
                (propsRef as any)?.current?.setAttribute(
                  'style',
                  'visibility:hidden;',
                );
                e.preventDefault();
                button.EffectFn(e, currentRange.current);
              }}
            >
              {button?.Tconfig?.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
const PopPluginRef = forwardRef<HTMLDivElement, PopProps>((props, ref) => (
  <PopPlugin {...props} propsRef={ref} />
));
export { PopPluginRef };
