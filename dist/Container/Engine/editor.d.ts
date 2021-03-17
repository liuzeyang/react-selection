import React from 'react';
import { ButtonView } from './buttonView';
import { AbstractPlugin } from './plugin';
import { SeriesHook } from './tapable';
export declare class Plugin extends AbstractPlugin {
  init(): React.ReactNode;
}
export interface Config {
  plugins: Array<typeof Plugin>;
}
export interface EditorInterface {
  range: Range | null;
  instances: Map<string, unknown>;
  buttonView: ButtonView[];
  commands: Map<String, () => void>;
  execute: (name: string, ...args: any) => void;
  register: (name: string, fn: (...args: any) => void) => boolean;
  instance: (name: string, instance: unknown) => boolean;
  getInstance: (name: string) => unknown;
}
export declare class Editor implements EditorInterface {
  range: Range | null;
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
  setRange(range: Range | null): void;
}
