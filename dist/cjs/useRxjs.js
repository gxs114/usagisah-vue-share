"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRxEvent = exports.pickChecked = exports.pickValue = exports.pickTargetValue = exports.identity = void 0;
const vue_1 = require("vue");
const rxjs_1 = require("rxjs");
/**
 * @description 工具操作符，用来给 useRxEvent 做占位符的
 */
function identity(x) {
    return x;
}
exports.identity = identity;
/**
 * @description 工具操作符，快速获取 e.target.value
 */
function pickTargetValue(input$) {
    return input$.pipe((0, rxjs_1.map)((e) => e.target.value));
}
exports.pickTargetValue = pickTargetValue;
/**
 * @description 工具操作符，快速获取 e.value
 */
function pickValue(input$) {
    return input$.pipe((0, rxjs_1.map)((e) => e.target.value));
}
exports.pickValue = pickValue;
/**
 * @description 工具操作符，快速获取 e.target.value
 */
function pickChecked(input$) {
    return input$.pipe((0, rxjs_1.map)((e) => e.target.checked));
}
exports.pickChecked = pickChecked;
/**
 * @description 适配 rxjs 的 fromEvent
 * @param {} (input: Observable<any>) => Observable<P>
 * @param {} (arg: P) => void |
 * {
 *  next: (arg: P) => void,
 *  error: (arg: any) => void,
 *  complete: () => void
 * }
 *
 * @example const [onClick, click$] = useRxEvent(identity, (e) => console.log(e))
 *
 * @example const [onClick, click$] = useRxEvent(
 *  (input$) => input$.pipe( map(() => false) ),
 *  e => console.log(e)
 * )
 */
function useRxEvent(pipes, fn) {
    const input$ = new rxjs_1.Subject();
    pipes(input$).subscribe(fn);
    (0, vue_1.onBeforeUnmount)(() => {
        input$.complete();
    });
    return [(arg) => input$.next(arg), input$];
}
exports.useRxEvent = useRxEvent;
//# sourceMappingURL=useRxjs.js.map