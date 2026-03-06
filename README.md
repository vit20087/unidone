[![CI/CD Pipeline](https://github.com/vit20087/unidone/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/vit20087/unidone/actions/workflows/ci-cd.yml)
**Live демо проєкту:**[https://unidone-seven.vercel.app/]
**UniDone** — це MVP менеджера студентських завдань. Проєкт створюється в рамках лабораторних робіт для вивчення сучасних практик розробки, автоматизованого розгортання та продуктової аналітики.

## 🚀 Інтегровані технології

* **Фронтенд:** Vite + Vanilla JavaScript
* **Тестування:** Vitest (Unit) + Playwright (E2E)
* **CI/CD Pipeline:** GitHub Actions (автоматична перевірка коду ESLint та запуск тестів при кожному Push/PR)
* **Хмарний хостинг:** Vercel (безперервне розгортання з головної гілки `main`)
* **Продуктова аналітика:** PostHog (відстеження кастомних подій `task_created`, воронки конверсії, Session Replay, Feature Flags)
* **Моніторинг помилок:** Sentry (автоматичний трекінг багів та продуктивності)

## Як запустити проєкт локально
### Передумови
Переконайтеся, що на вашому комп'ютері встановлено [Node.js](https://nodejs.org/).

1. Зклонуйте репозиторій на свій комп'ютер:
   ```bash
   git clone [https://github.com/vit20087/unidone.git]
2. Перейдіть у папку проєкту:
   ```bash
   cd unidone
3. Встановіть необхідні залежності
   ```bash
   npm install

