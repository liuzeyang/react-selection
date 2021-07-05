import React from 'react';
import './index.less';
import { Config, Editor } from './Engine/editor';
declare type Selections = Selection | null;
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
declare const Container: React.FC<ContainerProps>;
export default Container;
