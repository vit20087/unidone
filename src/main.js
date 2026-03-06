import {getDaysUntilDeadLine} from "./tasks.js";
import * as Sentry from "@sentry/browser";
Sentry.init({
    dsn:"https://c9db002493f070792b4874f07e95e735@o4510993997889536.ingest.de.sentry.io/4510997027553360",
    tracesSampleRate: 1.0,
});
const appTitle = import.meta.env.VITE_APP_TITLE || 'UniDone - Менеджер';
document.querySelector('h1').innerText = appTitle;

console.log('App init.Days to test deadLine:', getDaysUntilDeadLine('2026-12-31'));

// --- Додаємо тестову кнопку для PostHog ---
// 1. Створюємо кнопку візуально на сторінці
const testButton = document.createElement('button');
testButton.innerText = "Створити тестове завдання";
testButton.style.padding = "10px";
testButton.style.marginTop = "20px";
document.body.appendChild(testButton);

// 2. Додаємо слухача: коли клікають на кнопку — відправляємо подію в аналітику
testButton.addEventListener('click', () => {
    // Відправляємо кастомну подію task_created
    window.posthog.capture('task_created', {
        priority: 'high',
        category: 'work'
    });
    alert('Подію task_created відправлено в PostHog!');
});

const errorButton = document.createElement('button');
errorButton.innerText = "🚨 Згенерувати помилку (Sentry)";
errorButton.style.padding = "10px";
errorButton.style.marginTop = "20px";
errorButton.style.backgroundColor = "#ff4c4c";
errorButton.style.color = "white";
document.body.appendChild(errorButton);

setTimeout(() => {
    throw new Error("Критична помилка! Зламався модуль завдань (Лаба 6)");
}, 2000);