import Vue from 'vue';
import swal, { SweetAlertOptions } from 'sweetalert2';
import { NuxtTypes } from '../types/nuxt-types';

export default ({ app, isClient, store }: NuxtTypes.context) => {
  swal.setDefaults({ animation: false, allowOutsideClick: false, reverseButtons: true });

  swal['submit'] = (config = {}) => {
    let defaultObj: SweetAlertOptions = {
      title: '確定要送出？',
      text: '',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '是',
      cancelButtonText: '否',
    };
    const options = Object.assign(defaultObj, config);
    return swal(options);
  };

  window['swal'] = swal;
};
