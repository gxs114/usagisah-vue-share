import { Subject, Observable } from "rxjs";
/**
 * @description 工具操作符，用来给 useRxEvent 做占位符的
 */
export declare function identity<T>(x: T): T;
/**
 * @description 工具操作符，快速获取 e.target.value
 */
export declare function pickTargetValue<T>(input$: any): Observable<T>;
/**
 * @description 工具操作符，快速获取 e.value
 */
export declare function pickValue<T>(input$: any): Observable<T>;
/**
 * @description 工具操作符，快速获取 e.target.value
 */
export declare function pickChecked(input$: any): Observable<boolean>;
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
export declare function useRxEvent<P>(pipes: (input: Observable<any>) => Observable<P>, fn: ((arg: P) => void) | {
    next?: (arg: P) => void;
    error?: (arg: any) => void;
    complete?: () => void;
}): readonly [(arg: any) => void, Subject<P>];
