# ReactJS Demo - Food Ordering App

## About
Hi, I'm currently learning ReactJS. This is my demo ReactJS application which I created a food ordering app through the guide of <a href="https://academind.com/" target="_blank">Maximilian Schwarzmüller</a>. This project demonstrate on how to use all the React hooks. Feel free to clone this project to see it for yourself :blush:.

## Getting Started
### Installing
First you need to install all the packages:-

```
npm install
```
or
```
yarn install
```
### Run the project
Start the project:-
```
npm start
```

## Packages
```
"dependencies": {
    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^11.2.2",
    "@testing-library/user-event": "^12.5.0",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.1",
    "web-vitals": "^0.2.4"
  },
```

## Files and Folder
This is the project structure that you will get upon download: 

```
food-ordering-app
.
|-- README.md        
|-- package-lock.json
|-- package.json
|-- public
|   |-- favicon.ico
|   |-- index.html
|   |-- logo192.png
|   |-- logo512.png
|   |-- manifest.json
|   `-- robots.txt
`-- src
    |-- App.js
    |-- assets
    |   `-- meals.jpg
    |-- components
    |   |-- Cart
    |   |   |-- Cart.js
    |   |   |-- Cart.module.css
    |   |   |-- CartIcon.js
    |   |   |-- CartItem.js
    |   |   `-- CartItem.module.css
    |   |-- Layout
    |   |   |-- Header.js
    |   |   |-- Header.module.css
    |   |   |-- HeaderCartButton.js
    |   |   `-- HeaderCartButton.module.css
    |   |-- Meals
    |   |   |-- AvailableMeals.js
    |   |   |-- AvailableMeals.module.css
    |   |   |-- MealItem
    |   |   |   |-- MealItem.js
    |   |   |   |-- MealItem.module.css
    |   |   |   |-- MealItemForm.js
    |   |   |   `-- MealItemForm.module.css
    |   |   |-- Meals.js
    |   |   |-- MealsSummary.js
    |   |   `-- MealsSummary.module.css
    |   `-- UI
    |       |-- Card.js
    |       |-- Card.module.css
    |       |-- Input.js
    |       |-- Input.module.css
    |       |-- Modal.js
    |       `-- Modal.module.css
    |-- index.css
    |-- index.js
    `-- store
        |-- CartProvider.js
        `-- cart-context.js
```