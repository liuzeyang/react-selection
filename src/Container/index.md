## Container

Demo:

```tsx
 import React from 'react';
 import { Container } from 'react-selection';

 export default () => <Container id="dddd" onSelect = {(e, selection) => {
     if(selection && selection?.isCollapsed){
                return;
            }
            const range: Range|undefined = selection?.getRangeAt(0);
            if(! selection || !range){
                return;
            }
            const content = range?.toString().trim();
            if(!content){
                return;
            }
            const { commonAncestorContainer, startContainer, endContainer, } = range;
            if(startContainer.nodeType === 3 && startContainer.parentNode?.nodeType === 1){

            }
            document.execCommand('backColor', false, 'red')
            // const newNode = document.createElement('span');
            // newNode.setAttribute('contenteditable', 'false');
            // newNode.setAttribute('color', 'blue');
            // newNode.classList.add('huaci');
            // newNode.style.backgroundColor = 'blue';
            // range.surroundContents(newNode);
 }}/>
```