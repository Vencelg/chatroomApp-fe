// @ts-nocheck
import App from './App.svelte'
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

/* window.Pusher = Pusher;

// @ts-ignore
  window.Echo = new Echo({
  broadcaster: 'pusher',
  key: "local",
  wsHost: "127.0.0.1",
  wsPort: 6001,
  forceTLS: false,
  disableStats: true
}); */

const app = new App({
  target: document.getElementById('app')
})

export default app
