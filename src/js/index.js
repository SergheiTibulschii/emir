import { h, render } from 'preact';
import '@/assets/styles/style.css';
import { mountTest, mountSignup } from './utils';
import { App } from './App';

// const testBtn = document.querySelector('#test');
// const signupBtn = document.querySelectorAll('#signup');

// testBtn.onclick = function () {
//     mountTest();
// };

// Array.from(signupBtn).forEach((btn) => {
//     btn.onclick = function () {
//         mountSignup();
//     };
// });

render(<App />, document.getElementById('app'));
