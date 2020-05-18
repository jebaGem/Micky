<p align="center">
  <img src="screenshot.png" alt="Thermostat app screenshot">
</p>
<h3 align="center">Thermostat app</h3>

---

## 📝 Table of Contents

- [About](#about)
- [How did I solve ?](#solved)
- [Tests](#tests)
- [Tools](#tools)

## 🧐 About <a name = "about"></a>

This repo is made to showcase one of the test assignments that I have done. The task is to build a component which is a light implementation of a thermostat.
##  Completed the Assignment 
### Requirements:

> We want you to create a small thermostat dashboard.
> It needs the following: 
>
> - Current temperature in the room. Completed
> - Current set temperature. Completed
> - Time of latest update. Completed
> - Button to increment the temperature by half a degree at the time. Completed
> - Button to decrement the temperatture by half a degree at the time. Completed
> - The increment / decrement buttons should not disable when they are clicked. Your user should be able to press the button multiple times to increate / decrease the the temp a couple of degrees. Be aware here about updating the data too many times. Completed
>
> We want you to fetch the data at least every 2 seconds to update the current temperature and the time of last update.
> Be aware of race conditions. The patch api call takes about 1 second to update the data.
> It also is possible that when you get the data, you will receive a `202` HTTP-code instead of the data.
> This means that the backend has received your request ,but it can not send you the latest data. When this happens, you >need to retry the API call. (The backend is set to have a 50-50 chance to send the data or return a `202`).

### How Did I solve<a name = "solved"></a>
> I see most of the requirements are already done. But I felt like that is not right way as every logic is in the same file 
> First I saperated the UI and state mangagement in different layer. Used redux to solve that.
> Moved the service call and some operation like time conversion in service folder.
> Also I used redux saga for the background task like fething api every 2 seconds and and Patch operation, to solve the racing issue.
>
> Reused the UI styles and the time conversion logic which is already in the solution.

> ### Libraries Used
>
> Redux and Redux Saga. Axios for API call


## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for
development and testing purposes.

### Install server dependencies

```sh
# yarn
yarn

# npm
npm install
```

### Install client dependencies

```sh
# yarn
yarn install:client

# npm
npm run install:client
```

### Start client and server

```sh
# yarn
yarn start

# npm
npm run start
```

Now you can open the app at `http://localhost:3000/`.

## 🔧 Running tests <a name = "tests"></a>

There are both unit and e2e tests implemented.

### Unit tests

```sh
Unfortunately I couldnt write the unit test. This is because once I start running the test I got the following error (After adding redux and then my Test)

Cannot find module 'react' from 'Provider.js'

However, Jest was able to find: 'components/Provider.js'

    You might want to include a file extension in your import, or update your 'moduleFileExtensions', which is currently ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'].

```
To solve this I added some dependencies , but it crashed my application. May be in future I can figure it out the reason.  
```sh


## ⛏️ Tools <a name = "tools"></a>

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [RxJS](https://rxjs-dev.firebaseapp.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Cypress](https://www.cypress.io/)
# Micky
