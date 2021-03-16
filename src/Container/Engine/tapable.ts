import { isFunction } from 'lodash';

export type task = (...args: unknown[]) => void;
export type taskPromise = (...args: unknown[]) => Promise<unknown>;

export class SeriesHook {
  tasks = new Map<string, task[]>();

  constructor() {}

  tap(name: string, task: task) {
    if (this.tasks.has(name)) {
      this.tasks.get(name)?.push(task);
    } else {
      let arr: task[] = [];
      this.tasks.set(name, arr);
      arr.push(task);
    }
  }

  call(name: string, ...args: unknown[]) {
    if (this.tasks.has(name)) {
      let taskArr = this.tasks.get(name);
      let cb = args.pop();
      taskArr?.forEach(task => {
        task(args);
      });
      isFunction(cb) && cb();
    }
  }
}

export class SeriesHookAsync {
  tasks = new Map<string, task[]>();

  constructor() {}

  tapAsync(name: string, task: task) {
    if (this.tasks.has(name)) {
      this.tasks.get(name)?.push(task);
    } else {
      let arr: task[] = [];
      this.tasks.set(name, arr);
      arr.push(task);
    }
  }

  callAsync(name: string, ...args: unknown[]) {
    if (this.tasks.has(name)) {
      let taskArr: task[] = this.tasks.get(name) || [];
      let cb = args.pop();
      let index = 0;
      let genetor = () => {
        if (index === taskArr.length) {
          isFunction(cb) && cb();
        } else {
          taskArr[index++](args, genetor);
        }
      };
      genetor();
    } else {
      throw new Error('没有注册过task');
    }
  }
}

export class SeriesHookPromise {
  tasks = new Map<string, taskPromise[]>();

  constructor() {}

  tapAsync(name: string, task: taskPromise) {
    if (this.tasks.has(name)) {
      this.tasks.get(name)?.push(task);
    } else {
      let arr: taskPromise[] = [];
      this.tasks.set(name, arr);
      arr.push(task);
    }
  }

  callAsync(name: string, ...args: unknown[]): Promise<unknown> {
    if (this.tasks.has(name)) {
      let taskArr: task[] = this.tasks.get(name) || [];
      let cb = args.pop();
      return Promise.all(
        taskArr.map(taskPromose => {
          return taskPromose(args);
        }),
      );
    } else {
      throw new Error('没有注册过task');
    }
  }
}
