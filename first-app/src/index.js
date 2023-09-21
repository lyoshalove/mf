import('./bootstrap').then(({default: initApp}) => {
  const root = document.querySelector('#root');

  if(root) {
    initApp(root);
  }
})