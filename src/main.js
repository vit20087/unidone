import {getDaysUntilDeadLine} from "./tasks.js";

const appTitle = import.meta.env.VITE_APP_TITLE || 'UniDone - Менеджер';
document.querySelector('h1').innerText = appTitle;

console.log('App init.Days to test deadLine:',getDaysUntilDeadLine('2026-12-31'));
