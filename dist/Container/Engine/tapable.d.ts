export declare type task = (...args: unknown[]) => void;
export declare type taskPromise = (...args: unknown[]) => Promise<unknown>;
export declare class SeriesHook {
  tasks: Map<string, task[]>;
  constructor();
  tap(name: string, task: task): void;
  call(name: string, ...args: unknown[]): void;
}
export declare class SeriesHookAsync {
  tasks: Map<string, task[]>;
  constructor();
  tapAsync(name: string, task: task): void;
  callAsync(name: string, ...args: unknown[]): void;
}
export declare class SeriesHookPromise {
  tasks: Map<string, taskPromise[]>;
  constructor();
  tapAsync(name: string, task: taskPromise): void;
  callAsync(name: string, ...args: unknown[]): Promise<unknown>;
}
