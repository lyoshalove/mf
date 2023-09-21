import { createApp } from 'vue';
import App from './App.vue';

const init = (node = '#root') => {
  const app = createApp(App);

  app.mount(node);
}

export default init;