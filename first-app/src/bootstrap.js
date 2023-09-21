const init = (el) => {
  const title = document.createElement('h1');
  const btn = document.createElement('button');

  title.textContent = 'First app in Vanilla js';
  btn.textContent = 'Click Me!';

  btn.addEventListener('click', () => alert("SNUS"));

  el.appendChild(title);
  el.appendChild(btn);
}

export default init;