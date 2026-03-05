import {getDaysUntilDeadLine} from "./tasks.js";

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
