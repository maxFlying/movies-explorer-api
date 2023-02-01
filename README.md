# Дипломный проект Movies Explorer

## Описание проекта
Бэкенд часть дипломного проекта Movies Explorer. Проект был выложен на удаленный сервер и проходил код-ревью.

## Функционал:
Авторизация и регистрация пользователей, редактирование данных о пользователе, добавление и удаление фильмов.
- Роуты:
  - GET /users/me — возвращает информацию о пользователе;
  - PATCH /users/me — обновляет информацию о пользователе;
  - GET /movies — возвращает все фильмы из базы;
  - POST /movies — создаёт фильм с переданными в теле запроса данными;
  - DELETE /movies/:movieId — удаляет фильм из базы.

## Используемые технологии:
- JavaScript:
  - Промисы (Promise);
  - Асинхронность и оптимизация;
  - Rest API;
- Node.js;
- Express;
- MongoDB;
- Сelebrate;
- Winston.
- express-rate-limit.
- helmet.

## Установка и запуск проекта:
Клонировать репозиторий:

    git clone https://github.com/maxFlying/movies-explorer-api.git

Установить зависимости:

    npm install

Запустить сервер:

    npm run start

Запустить сервер с hot-reload:

    npm run dev

## Ссылки:

[Деплой](https://api.maxflying.diploma.nomoredomains.icu) - в данный момент ВМ остановлена, ссылка нерабочая. 

[Репозиторий фронтенд части](https://github.com/maxFlying/movies-explorer-frontend)
