import init from 'app1/App1Init';
import initReactApp from 'app2/App2Init';
import initVueApp from 'app3/App3Init';

const app1Block = document.querySelector('#app1Block');
const app2Block = document.querySelector('#app2Block');

if(app1Block) {
  init(app1Block);
}

if(app2Block) {
  initReactApp(app2Block);
}

if(app3Block) {
  initVueApp('#app3Block');
}