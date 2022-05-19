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
export declare function useSystemTheme(): readonly [Readonly<import("vue").Ref<boolean>>, Readonly<import("vue").Ref<"light" | "dark">>];
