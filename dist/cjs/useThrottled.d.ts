/**
 * @description 节流函数，一定时间内只会执行一次，内部使用 useEffect 监听，没有闭包陷阱
 * @param {Function} fn 节流的函数
 * @param {number} delay 节流的时间
 *
 * @example
 * const fn = useThrottle((props: string) => {
 *  console.log("throttle", props)
 * })
 *
 * fn("hello")
 */
export declare function useThrottled<P extends any[]>(fn: (...args: P) => any, delay?: number): (...args: P) => void;
