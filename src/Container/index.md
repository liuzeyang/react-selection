## Container

Demo:

```tsx
import React from 'react';
import { Container, AbstractPlugin, ButtonView } from '@jason-design/selection';

class Slot extends AbstractPlugin {
  init() {
    let button = new ButtonView();
    button.set({
      label: '添加分支',
    });
    // button.visible = true;
    this.listenTo(button, (e, range) => {
      console.log(this, e, range);
      console.log(range.getBoundingClientRect());
      this.editor.execute('handleVisible');
      //  const newNode = document.createElement('variable');
      // newNode.setAttribute('contenteditable', 'false');
      // newNode.classList.add('huaci');
      // newNode.style.backgroundColor = 'blue';
      // let con = range.extractContents();
      // newNode.append(con)
      // newNode.addEventListener('click', () => {
      // })
      // range.insertNode(newNode);
      // document.getSelection().removeAllRanges();
    });
  }
}
const config = {
  plugins: [Slot],
};
export default () => {
  let [count, setCount] = React.useState(1);
  let [editor, setEditor] = React.useState(null);
  let [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (editor !== null) {
      editor.register('handleVisible', () => {
        setCount(count + 1);
        setVisible(true);
      });
      editor.register('handleBack', () => {
        let range = editor.range;
        const newNode = document.createElement('variable');
        newNode.setAttribute('contenteditable', 'false');
        newNode.classList.add('huaci');
        newNode.style.backgroundColor = 'blue';
        let con = range.extractContents();
        newNode.append(con);
        newNode.addEventListener('click', () => {});
        range.insertNode(newNode);
      });
    }
  }, [editor]);
  return (
    <>
      <Container
        id="dddd"
        html='<p>大幅度<variable contenteditable="false" class="huaci" style="background-color: blue;">发发送到发</variable>打的发发生</p>
'
        onChange={data => {
          console.log('change', data);
        }}
        config={config}
        onContainerClick={e => {
          console.log(222);
        }}
        onInit={editor => {
          editor.hooks.init.tap('editor', () => {
            console.log('init;');
          });
          editor.hooks.execute.tap('editor', () => {
            console.log('execute;');
          });
          setEditor(editor);
        }}
      />
      {visible && (
        <div
          onClick={() => {
            editor.execute('handleBack');
          }}
        >
          {count}
        </div>
      )}
    </>
  );
};
```
