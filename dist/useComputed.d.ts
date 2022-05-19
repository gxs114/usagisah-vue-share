import { Ref } from "vue";
export declare function useComputedSync<T>(getter: () => T): Readonly<Ref<T>>;
