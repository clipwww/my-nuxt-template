import Vue from 'vue';
import VueRouter, { Route, RouterOptions } from 'vue-router';
import Vuex, { Store } from 'vuex';
import { Request, Response } from 'express';
import { StoreTypes } from './vuex-types';

export namespace NuxtTypes {
  export type context = {
    app?: Vue;
    isClient?: boolean;
    isServer?: boolean;
    isStatic?: boolean;
    isDev?: boolean;
    isHMR?: boolean;
    route?: Route;
    from?: Route;

    // TODO: refact vuex to typsecript
    store?: Store<StoreTypes.state>;

    env?: object;
    params?: object;
    query?: object;
    /**
     * AVAILABLE: server
     *
     * @type {Request}
     */
    req?: Request;
    /**
     * AVAILABLE: server
     *
     * @type {Response}
     */
    res?: Response;
    redirect?(path: string): void;
    redirect?(status: number, path: string): void;
    redirect?(path: string, query: object): void;
    redirect?(status: number, path: string, query: object): void;
    error?(params: { statusCode: number; message: any }): void;
    /**
     * AVAILABLE: client
     *
     * @type {object}
     */
    nuxtState?: object;
    /**
     * AVAILABLE: server
     *
     * @param {({ Components, nuxtState: object }) => void} fn
     */
    beforeNuxtRender?(fn: ({ Components, nuxtState: object }) => void);
  };
}
