/// <reference types="react" />
export declare type EffectFn = (e: any, range: Range) => void;
export interface TConfig {
  label: string | React.ReactNode;
  style?: CSSStyleDeclaration;
  enabled?: boolean;
}
export declare class ButtonView {
  Tconfig: TConfig | undefined;
  EffectFn: EffectFn;
  visible?: boolean;
  constructor();
  set(config: TConfig): void;
  effect(effectFn: EffectFn): void;
}
