import { onBeforeUnmount, readonly, ref, watchSyncEffect } from "vue";
export function useComputedSync(getter) {
    const _ref = ref(null);
    const stop = watchSyncEffect(() => {
        _ref.value = getter();
    });
    onBeforeUnmount(() => {
        stop();
    });
    return readonly(_ref);
}
//# sourceMappingURL=useComputed.js.map