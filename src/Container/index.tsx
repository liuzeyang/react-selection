import React, {useEffect, useRef} from 'react';
import { debounce } from 'lodash';
import './index.less';

type Selections = Selection | null;
type Editor = {
    getDom: () => HTMLElement | null;
    getData: () => string | undefined
}
interface ContainerProps {
    id: string;
    onSelect?: (e: Event, selection: Selections) => void;
    getEditor?: (editor: Editor) => void
}

/**
 * 
 * @param id
 * @param value
 * @param onSelect
 * @param getEditor
 */

const Container: React.FC<ContainerProps> = ({ id, onSelect, getEditor }) => {

    const ref: Editor= {
        getDom(){
            return document.getElementById(id);
        },
        getData(){
            return document.getElementById(id)?.innerHTML
        },
    }

    useEffect(() => {
        document.execCommand("defaultParagraphSeparator", false, "p");
        getEditor && getEditor(ref)
    }, [])

    useEffect(() => {
        document.onselectionchange = debounce((e) => {
            console.log('onselectionchange', e);
            const selection: Selections = document.getSelection();
            onSelect && onSelect(e, selection);
            selection && selection.removeAllRanges(); // 这个remove还是很重要的
        }, 1000)
        return () => {
            document.onselectionchange = () => {}
        }
    }, [id, onSelect])

    return (
        <div className='selection-backmark'>
            <div id={id} className='selection-container' contentEditable={true} spellCheck={false}>
                ​fsafdsfsdfafsfafsfafdsf
                1. 数据变量：在生成文章时，系统会用数据源提供的实时数据，作为文章中该变量位置的内容。模板编辑时可以如下例，在要表达今日最高气温数据的位置插入『今日最高气温』这个数据变量。
                举例：今日最高气温度。    
                发送到发法法师发  
            </div>
        </div>
    )
};

export default Container