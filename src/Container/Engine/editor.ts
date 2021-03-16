import { isFunction, isObject } from 'lodash';
import React from 'react';
import { ButtonView } from './buttonView';
import { AbstractPlugin } from './plugin';
import { SeriesHook } from './tapable';

export class Plugin extends AbstractPlugin {
  init(): React.ReactNode {
    throw new Error('Method not implemented.');
  }
}

export interface Config {
  plugins: Array<typeof Plugin>;
}

export interface EditorInterface {
  // 记录range对象方便execute时去处理
  range: Range | null;
  // 记录instance来方便操作state等
  instances: Map<string, unknown>;
  // 记录buttomView
  buttonView: ButtonView[];
  // 记录命令（执行range操作）以及hooks的函数
  commands: Map<String, () => void>;
  // 执行command
  execute: (name: string, ...args: any) => void;
  // 注册command以及hooks 方法
  register: (name: string, fn: (...args: any) => void) => boolean;
  // 注册实例
  instance: (name: string, instance: unknown) => boolean;
  // 获取实例
  getInstance: (name: string) => unknown;
}

export class Editor implements EditorInterface {
  range: Range | null = null;
  instances = new Map<string, unknown>();
  buttonView: ButtonView[] = [];
  commands = new Map<String, (...args: any) => void>();
  hooks = {
    beforeInit: new SeriesHook(),
    init: new SeriesHook(),
    beforeExecute: new SeriesHook(),
    execute: new SeriesHook(),
  };

  constructor() {}

  init(config: Config) {
    this.hooks.beforeInit.call('editor');
    config.plugins.forEach((P: typeof Plugin) => {
      let Plu = new P(this);
      Plu.init();
    });
    this.hooks.init.call('editor');
  }

  execute(name: string, ...args: any) {
    this.hooks.beforeExecute.call('editor');
    if (this.commands.has(name)) {
      let fn = this.commands.get(name);
      let result = fn && fn(...args);
      this.hooks.execute.call('editor', result);
    } else {
      throw new Error('不存在该方法');
    }
  }

  register(name: string, fn: (...args: any) => void) {
    if (isFunction(fn)) {
      if (this.commands.has(name)) {
        throw new Error('已经存在该方法');
      }
      this.commands.set(name, fn);
      return true;
    } else {
      throw new Error('已经存在该方法');
    }
  }

  instance(name: string, instance: unknown) {
    if (isObject(instance)) {
      if (this.instances.has(name)) {
        throw new Error('已经存在该实例');
      }
      this.instances.set(name, instance);
      return true;
    } else {
      throw new Error('已经存在该实例');
    }
  }

  getInstance(name: string) {
    if (this.instances.has(name)) {
      return this.instances.get(name);
    } else {
      throw new Error('不存在该实例');
    }
  }

  setRange(range: Range | null) {
    this.range = range;
  }
}
