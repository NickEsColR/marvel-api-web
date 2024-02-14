# 🌐 Web With Marvel Information

Welcome to the MArvel Information web, a web application to get information about Marvel comics, series and events using the Marvel API.

## 🔍Project Overview

This project is inspired by [ratasi](https://github.com/ratasi) project from his course at [udemy](https://www.udemy.com/course/aprende-react-js-desde-cero-paso-a-paso). It was developing following the course guide. Nevertheless, I continue adding functionality and style.

## 💭Features

* See what are the last events.
* See what marvel series exist.
* See what relevant comics exist.

## 📦Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/NickEsColR/marvel-api-web.git
    ```

2. Change into the project directory:

    ```bash
    cd marvel-api-web
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Go to [Marvel API page](https://developer.marvel.com)

   * Click GET STARTED button
   * Create an account
   * Generate your keys
   * Go to [how to use key](https://developer.marvel.com/documentation/authorization)
   * Generate a md5 hash using timestamp, public and private key has requested by API

5. Create .env file and add

    ```.env
    REACT_APP_HASH_ID=your hash following marvel api rules
    REACT_APP_API_KEY=your public api key
    REACT_APP_BASE_URL=http://gateway.marvel.com/v1/public/
    REACT_APP_TS=timestamp used in hash creation
    ```

6. Start the development server:

    ```bash
    npm start
    ```

7. Open your preferred web browser and navigate to `http://localhost:3000` to view the application.

## ⚙Technologies

* [React 18](https://reactjs.org/)
* [Semantic UI React](https://react.semantic-ui.com)
* [React Router](https://reactrouter.com/en/main)
* [Sass](https://sass-lang.com)

## 🗃Acknowledgements

I extend my gratitude to Rafa for the course, which guide helps the base of the project.
