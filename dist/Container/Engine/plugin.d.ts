/// <reference types="react" />
import { ButtonView, EffectFn } from './buttonView';
import { Editor } from './editor';
export declare abstract class AbstractPlugin {
  private editor;
  constructor(editor: Editor);
  abstract init(): string | React.ReactNode;
  listenTo(buttonView: ButtonView, effectFn: EffectFn): void;
}
