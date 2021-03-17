import { ButtonView, EffectFn } from './buttonView';
import { Editor } from './editor';
export declare abstract class AbstractPlugin {
  editor: Editor;
  constructor(editor: Editor);
  abstract init(): void;
  listenTo(buttonView: ButtonView, effectFn: EffectFn): void;
}
