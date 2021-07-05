export type EffectFn = (e: any, range: Range) => void;
export interface TConfig {
  label: string | React.ReactNode;
  style?: CSSStyleDeclaration;
  enabled?: boolean;
}

export class ButtonView {
  Tconfig: TConfig | undefined;
  EffectFn!: EffectFn;
  visible?: boolean = true;
  constructor() {}

  set(config: TConfig) {
    this.Tconfig = config;
  }

  effect(effectFn: EffectFn) {
    this.EffectFn = effectFn;
  }
}
