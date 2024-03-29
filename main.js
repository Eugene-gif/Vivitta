// import './style.css'
// import javascriptLogo from './src/img/javascript.svg'
// import { setupCounter } from './src/js/counter'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// import { setupCounter } from "./src/js/counter";
import { setupRouter } from "./src/modules/functional/Router/router";
import { setupMenu } from "./src/modules/functional/Menu/menu";
import { setupResize } from "./src/modules/functional/Resize/resize";
import { setupTheme } from "./src/modules/functional/Theme/theme";
import { setupGetProducts } from "./src/modules/pages/Products/getProducts";


setupRouter();
setupMenu();
setupResize();
setupTheme();
setupGetProducts();