import { ButtonView } from './buttonView';
import { AbstractPlugin } from './plugin';
import { SeriesHook } from './tapable';
export declare class Plugin extends AbstractPlugin {
  init(): void;
}
export interface Config {
  plugins: Array<typeof Plugin>;
  observer?: {
    options?: {
      attributes?: boolean;
      characterData?: boolean;
      childList?: boolean;
      subtree?: boolean;
      attributeOldValue?: boolean;
      characterDataOldValue?: boolean;
    };
    callback: MutationCallback;
  };
}
export interface EditorInterface {
  ele: Element | null;
  range: Range | null;
  observer: MutationObserver | null;
  instances: Map<string, unknown>;
  buttonView: ButtonView[];
  commands: Map<String, () => void>;
  execute: (name: string, ...args: any) => void;
  register: (name: string, fn: (...args: any) => void) => boolean;
  instance: (name: string, instance: unknown) => boolean;
  getInstance: (name: string) => unknown;
  getData: () => string;
}
export declare class Editor implements EditorInterface {
  ele: Element | null;
  range: Range | null;
  observer: MutationObserver | null;
  instances: Map<string, unknown>;
  buttonView: ButtonView[];
  commands: Map<String, (...args: any) => void>;
  hooks: {
    beforeInit: SeriesHook;
    init: SeriesHook;
    beforeExecute: SeriesHook;
    execute: SeriesHook;
  };
  constructor();
  init(config: Config): void;
  execute(name: string, ...args: any): void;
  register(name: string, fn: (...args: any) => void): boolean;
  instance(name: string, instance: unknown): boolean;
  getInstance(name: string): unknown;
  setEle(ele: Element): void;
  setRange(range: Range | null): void;
  setObserver(observer: MutationObserver | null): void;
  getData(): string;
}
