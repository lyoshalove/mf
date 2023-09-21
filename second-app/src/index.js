import('./bootstrap').then(({default: initApp}) => {
  const node = document.querySelector('#root');

  if(node) {
    initApp(node);
  }
})