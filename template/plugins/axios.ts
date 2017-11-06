import axios from 'axios';
import { NuxtTypes } from '../types/nuxt-types';

export default (ctx: NuxtTypes.context) => {
  if (ctx.isServer) {
    axios.defaults.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`;
  } else {
    axios.interceptors.request.use(
      config => {
        console.log(`${config.method}: ${config.url}`);

        return config;
      },
      err => {
        // console.log(err);
        return Promise.reject(err);
      }
    );

    axios.interceptors.response.use(
      response => {
        // Do something with response data
        return response;
      },
      err => {
        // Do something with response error
        // console.log(err);
        return Promise.reject(err);
      }
    );
  }
};
