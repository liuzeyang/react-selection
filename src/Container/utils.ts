import { ButtonView } from './Engine/buttonView';
import { EditorInterface } from './Engine/editor';

export const checkVisiblePlugin = (editor: EditorInterface) => {
  return (
    editor.buttonView.filter((button: ButtonView) => {
      return button.visible;
    }).length !== 0
  );
};
