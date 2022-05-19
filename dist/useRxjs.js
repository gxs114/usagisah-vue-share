import { onBeforeUnmount } from "vue";
import { Subject, map } from "rxjs";
/**
 * @description 工具操作符，用来给 useRxEvent 做占位符的
 */
export function identity(x) {
    return x;
}
/**
 * @description 工具操作符，快速获取 e.target.value
 */
export function pickTargetValue(input$) {
    return input$.pipe(map((e) => e.target.value));
}
/**
 * @description 工具操作符，快速获取 e.value
 */
export function pickValue(input$) {
    return input$.pipe(map((e) => e.target.value));
}
/**
 * @description 工具操作符，快速获取 e.target.value
 */
export function pickChecked(input$) {
    return input$.pipe(map((e) => e.target.checked));
}
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
export function useRxEvent(pipes, fn) {
    const input$ = new Subject();
    pipes(input$).subscribe(fn);
    onBeforeUnmount(() => {
        input$.complete();
    });
    return [(arg) => input$.next(arg), input$];
}
//# sourceMappingURL=useRxjs.js.map