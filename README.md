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
- Настроены глобальные стили и сброс отступов в [`landing/app/globals.css`](landing/app/globals.css).

### Часть 3 и 4. Компоненты и вёрстка
Лендинг разбит на понятные отдельные компоненты в папке `components/`:
- [`Header.tsx`](landing/components/Header.tsx) + [`Header.module.css`](landing/components/Header.module.css) — шапка с логотипом, ссылками и кнопкой входа.
- [`Hero.tsx`](landing/components/Hero.tsx) + [`Hero.module.css`](landing/components/Hero.module.css) — главный экран с заголовком, описанием, кнопкой «Попробовать бесплатно» и примером списка задач.
- [`Features.tsx`](landing/components/Features.tsx) + [`Features.module.css`](landing/components/Features.module.css) — блок возможностей с сеткой из 3 карточек (CSS Grid).
- [`Pricing.tsx`](landing/components/Pricing.tsx) + [`Pricing.module.css`](landing/components/Pricing.module.css) — 3 тарифа (Базовый, Продвинутый, Команда).
- [`Footer.tsx`](landing/components/Footer.tsx) + [`Footer.module.css`](landing/components/Footer.module.css) — подвал сайта с копирайтом и ссылками.
- Все компоненты подключены в [`landing/app/page.tsx`](landing/app/page.tsx).

### Часть 5. Адаптивность
- Во всех CSS-модулях добавлены медиазапросы `@media (max-width: 768px)`.
- Сетка Features и Pricing перестраивается из 3 колонок в 1 колонку на мобильных экранах.
- Вёрстка проверена на ширинах 375px, 768px и 1440px без горизонтальной полосы прокрутки.

---

## 🚀 Запуск проекта

### Из корневой папки:
```bash
npm run dev
```

### Или из папки landing:
```bash
cd landing
npm run dev
```
Страница открывается в браузере по адресу: **http://localhost:3000**

### Проверка линтера и сборки:
```bash
cd landing
npm run lint     # проверка ESLint
npm run build    # генерация статической страницы
```
