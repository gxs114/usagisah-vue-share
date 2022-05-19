import { onBeforeUnmount, reactive, readonly, toRefs } from "vue";
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
export function useSystemTheme() {
    const state = reactive([false, "light"]);
    const handleTheme = (e) => {
        state[0] = e.matches;
        state[1] = e.matches ? "dark" : "light";
    };
    const match = window.matchMedia("(prefers-color-scheme: dark)");
    handleTheme(match);
    match.addEventListener("change", handleTheme);
    onBeforeUnmount(() => match.removeEventListener("change", handleTheme));
    return readonly(toRefs(state));
}
//# sourceMappingURL=useSystemTheme.js.map