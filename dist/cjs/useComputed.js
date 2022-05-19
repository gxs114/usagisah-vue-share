"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useComputedSync = void 0;
const vue_1 = require("vue");
function useComputedSync(getter) {
    const _ref = (0, vue_1.ref)(null);
    const stop = (0, vue_1.watchSyncEffect)(() => {
        _ref.value = getter();
    });
    (0, vue_1.onBeforeUnmount)(() => {
        stop();
    });
    return (0, vue_1.readonly)(_ref);
}
exports.useComputedSync = useComputedSync;
//# sourceMappingURL=useComputed.js.map