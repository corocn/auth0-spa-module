import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $auth0: Auth0Client
  }
}
