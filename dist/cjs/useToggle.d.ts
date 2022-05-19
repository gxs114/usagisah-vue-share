import { Ref } from "vue";
/**
 * @description 参数支持4种类型：boolean, number, string, Array<any>
 * 返回值类型为 [当前响应式的值, 自动切换值函数, 数组情况下内部的原始数组（用于修改原始值）]
 *
 * const [value, toggle] = useToggle(true)
 * const [value, toggle] = useToggle(1)
 * const [value, toggle] = useToggle("hello")
 * const [value, toggle, source] = useToggle([1, 2, 3])
 */
export declare function useToggle(initialValue: boolean): ReturnType<typeof withBoolean>;
export declare function useToggle(initialValue: number): ReturnType<typeof withNumber>;
export declare function useToggle<T extends string>(initialValue: T): [Ref<string>, () => void, Ref<string>];
export declare function useToggle<T>(initialValue: T[]): [Ref<T>, () => void, Ref<any[]>];
declare function withBoolean(value: boolean): readonly [Ref<boolean>, () => boolean];
declare function withNumber(value: number): readonly [Ref<number>, () => number];
export {};
