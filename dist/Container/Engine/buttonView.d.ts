/// <reference types="react" />
import { Evt } from '..';
export declare type EffectFn = (e: Evt, range: Range) => void;
export interface TConfig {
  label: string | React.ReactNode;
  style?: CSSStyleDeclaration;
  enabled?: boolean;
}
export declare class ButtonView {
  Tconfig: TConfig | undefined;
  EffectFn: EffectFn;
  constructor();
  set(config: TConfig): void;
  effect(effectFn: EffectFn): void;
}
