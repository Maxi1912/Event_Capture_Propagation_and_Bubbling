const divs = document.querySelectorAll('div');
function logText(e) {
  console.log(this);
  e.stopPropagation();
}
divs.forEach((div) => {
  div.addEventListener('click', logText, { capture: false, once: true });
});
// document.body.addEventListener('click', logText, { capture: true });
const button = document.querySelector('button');
button.addEventListener(
  'click',
  () => {
    console.log('Hello!');
  },
  { once: true }
);
