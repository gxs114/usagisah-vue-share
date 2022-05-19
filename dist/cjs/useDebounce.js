"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebounce = void 0;
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
function useDebounce(fn, delay = 700) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
exports.useDebounce = useDebounce;
//# sourceMappingURL=useDebounce.js.map