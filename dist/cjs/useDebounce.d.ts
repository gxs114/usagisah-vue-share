/**
 * @description 防抖函数，只有间隔指定时间才会执行
 * @param {Function} func 需要防抖的函数
 * @param {number} delay 间隔时间
 *
 * @example
 * const fn = useDebounce((props: string) => {
 *  console.log("debounce", props)
 * })
 *
 * fn("hello")
 */
export declare function useDebounce<P extends any[]>(fn: (...args: P) => any, delay?: number): (...args: P) => void;
