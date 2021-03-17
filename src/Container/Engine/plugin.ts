import { ButtonView, EffectFn } from './buttonView';
import { Editor } from './editor';

export abstract class AbstractPlugin {
  editor: Editor;
  constructor(editor: Editor) {
    this.editor = editor;
  }
  // 添加 buttonView  command
  abstract init(): void;

  listenTo(buttonView: ButtonView, effectFn: EffectFn) {
    buttonView.effect(effectFn);
    this.editor.buttonView.push(buttonView);
  }
}
