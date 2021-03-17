import './pop.less';
import React from 'react';
import { Editor } from '../Engine/editor';
export interface PopProps {
  editor: Editor;
  propsRef?: React.ForwardedRef<HTMLDivElement>;
  currentRange?: any;
}
declare const PopPluginRef: React.ForwardRefExoticComponent<PopProps &
  React.RefAttributes<HTMLDivElement>>;
export { PopPluginRef };
