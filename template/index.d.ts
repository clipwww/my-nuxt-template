import Vue from 'vue';
import { Route } from 'vue-router';
import { Store } from 'vuex';
import { StoreTypes } from './types/vuex-types';
import { NuxtTypes } from './types/nuxt-types';

type NuxtContextFn<T> = (context?: NuxtTypes.context) => T;
type NuxtTransitionFN = (to: Route, from: Route) => void;

declare module 'vue/types/vue' {
  // Global properties can be declared
  // on the `VueConstructor` interface
  interface Vue {
    $_store: Store<StoreTypes.state>;
  }
}

// ComponentOptions is declared in types/options.d.ts
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    asyncData?: NuxtContextFn<any>;
    fetch?: (context?: NuxtTypes.context) => Promise<any>;
    head?: any;
    layout?: string | NuxtContextFn<string>;
    middleware?: string | string[];
    scrollToTop?: boolean;
    transition?: string | Object | NuxtTransitionFN;
    validate?: (context?: NuxtTypes.context) => boolean;
  }
}
