import React from 'react';
import './index.less';
import { Config, Editor } from './Engine/editor';
declare type Selections = Selection | null;
export declare type Evt =
  | React.MouseEvent<HTMLDivElement>
  | React.KeyboardEvent<HTMLDivElement>;
interface ContainerProps {
  id: string;
  config: Config;
  html: any;
  onSelect?: (e: Evt, selection: Selections) => void;
  onChange?: (data: string, editor: Editor) => void;
  onContainerClick?: (e: Evt, editor: Editor) => void;
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
