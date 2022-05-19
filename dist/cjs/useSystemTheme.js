"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSystemTheme = void 0;
const vue_1 = require("vue");
/**
 * @description: 获取当前系统主题
 *
 * @return
 * [
 *
 *  isDark: boolean 是否是暗黑模式,
 *  theme: "light" | "dark"  主题
 *
 * ]
 */
function useSystemTheme() {
    const state = (0, vue_1.reactive)([false, "light"]);
    const handleTheme = (e) => {
        state[0] = e.matches;
        state[1] = e.matches ? "dark" : "light";
    };
    const match = window.matchMedia("(prefers-color-scheme: dark)");
    handleTheme(match);
    match.addEventListener("change", handleTheme);
    (0, vue_1.onBeforeUnmount)(() => match.removeEventListener("change", handleTheme));
    return (0, vue_1.readonly)((0, vue_1.toRefs)(state));
}
exports.useSystemTheme = useSystemTheme;
//# sourceMappingURL=useSystemTheme.js.map