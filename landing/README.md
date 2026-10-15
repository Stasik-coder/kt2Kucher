# Практическая работа: Мини-проект «Статический лендинг» (КТ2)

## Описание проекта
Статический адаптивный одностраничный сайт (лендинг) сервиса для управления задачами **TaskFlow**.
Проект выполнен на **Next.js (App Router)** с использованием **TypeScript** и модульных стилей (**CSS-модули**) по учебной программе.

---

## 🎯 Выполненные задачи

### Часть 1. Выбор референса и планирование
- Выбран макет лендинга таск-менеджера с Behance.
- Скриншот референса сохранен в папку [`docs/reference.png`](docs/reference.png).
- Составлен список секций, палитра и шрифты в файле [`docs/PLAN.md`](docs/PLAN.md).

### Часть 2. Инициализация проекта
- Проект создан через `create-next-app` с поддержкой TypeScript, App Router и ESLint.
- Настроены глобальные стили и сброс отступов в [`app/globals.css`](app/globals.css).

### Часть 3 и 4. Компоненты и вёрстка
Лендинг разбит на понятные отдельные компоненты в папке `components/`:
- [`Header.tsx`](components/Header.tsx) + [`Header.module.css`](components/Header.module.css) — шапка с логотипом, ссылками и кнопкой входа.
- [`Hero.tsx`](components/Hero.tsx) + [`Hero.module.css`](components/Hero.module.css) — главный экран с заголовком, описанием, кнопкой «Попробовать бесплатно» и примером списка задач.
- [`Features.tsx`](components/Features.tsx) + [`Features.module.css`](components/Features.module.css) — блок возможностей с сеткой из 3 карточек (CSS Grid).
- [`Pricing.tsx`](components/Pricing.tsx) + [`Pricing.module.css`](components/Pricing.module.css) — 3 тарифа (Базовый, Продвинутый, Команда).
- [`Footer.tsx`](components/Footer.tsx) + [`Footer.module.css`](components/Footer.module.css) — подвал сайта с копирайтом и ссылками.
- Все компоненты подключены в [`app/page.tsx`](app/page.tsx).

### Часть 5. Адаптивность
- Во всех CSS-модулях добавлены медиазапросы `@media (max-width: 768px)`.
- Сетка Features и Pricing перестраивается из 3 колонок в 1 колонку на мобильных экранах.
- Вёрстка проверена на ширинах 375px, 768px и 1440px без горизонтальной полосы прокрутки.

---

## 🚀 Запуск проекта

```bash
npm run dev
```
Страница открывается в браузере по адресу: **http://localhost:3000**

### Проверка линтера и сборки:
```bash
npm run lint     # проверка ESLint
npm run build    # генерация статической страницы
```
