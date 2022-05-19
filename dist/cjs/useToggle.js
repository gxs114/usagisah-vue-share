"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggle = void 0;
const vue_1 = require("vue");
function useToggle(initialValue) {
    switch (typeof initialValue) {
        case "boolean":
            return withBoolean(initialValue);
        case "number":
            return withNumber(initialValue);
        case "object":
            if (Array.isArray(initialValue)) {
                return withArray(initialValue);
            }
        case "string":
            return withArray(initialValue.split(""));
        default:
            throw Error("useToggle: value must be boolean or array or number");
    }
}
exports.useToggle = useToggle;
function withBoolean(value) {
    const bool = (0, vue_1.ref)(value);
    const toggle = () => (bool.value = !bool.value);
    return [bool, toggle];
}
function withNumber(value) {
    const num = (0, vue_1.ref)(value);
    const toggle = () => num.value++;
    return [num, toggle];
}
function withArray(value) {
    const arr = (0, vue_1.ref)(value);
    const cur = (0, vue_1.ref)(0);
    const result = (0, vue_1.computed)(() => arr.value[cur.value]);
    const toggle = () => (cur.value += 1);
    const unWatch = (0, vue_1.watch)(() => arr, () => {
        cur.value = 0;
    }, { flush: "sync" });
    (0, vue_1.onUnmounted)(() => unWatch());
    return [result, toggle, arr];
}
//# sourceMappingURL=useToggle.js.map