import { computed, onUnmounted, ref, watch } from "vue";
export function useToggle(initialValue) {
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
function withBoolean(value) {
    const bool = ref(value);
    const toggle = () => (bool.value = !bool.value);
    return [bool, toggle];
}
function withNumber(value) {
    const num = ref(value);
    const toggle = () => num.value++;
    return [num, toggle];
}
function withArray(value) {
    const arr = ref(value);
    const cur = ref(0);
    const result = computed(() => arr.value[cur.value]);
    const toggle = () => (cur.value += 1);
    const unWatch = watch(() => arr, () => {
        cur.value = 0;
    }, { flush: "sync" });
    onUnmounted(() => unWatch());
    return [result, toggle, arr];
}
//# sourceMappingURL=useToggle.js.map