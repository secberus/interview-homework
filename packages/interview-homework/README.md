# Secberus Frontend Mid-Principal Engineer task

## Situation
The year is 2021 - the Zombie apocalypse has started, and the virus spreads through the air. Only those who socially distance at least one home from another will be safe.

You have been asked by the government of your province to generate a model of the spread of zombies in order to preview the coming days. As of right now, our doctors claim that zombies will spread the infection by one home per day. However, due to the grid-style of your town, it can only spread north (up), south (down), west (left) and right (east). Additionally, zombies can not jump over empty homes.

Our top scientists are finishing a cure for the infected soon, but this relies on all of humanity not being infected.

You will be given a data-map of current homes, with known infected homes - show the spread step by step, and the ending result with how many days, if all are infected, remain. The government will move people around if the situation is grim.

Data map:

0 = Empty Home
1 = Healthy Home
2 = Zombie Home

```

// A case where all can be infected

// Input
[
  [1, 0, 1, 1, 0, 2],
  [1, 1, 1, 2, 1, 0],
  [0, 0, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 2],
  [2, 0, 1, 0, 1, 0]
]

// Output
[
  [2, 0, 2, 2, 0, 2],
  [2, 2, 2, 2, 2, 0],
  [0, 0, 2, 0, 2, 2],
  [2, 0, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2],
  [2, 0, 2, 0, 2, 0]
]
Your community will be totally infected in 4 day(s)
```

However, due to the above model, we can assume that with effective social
distancing, we can wait for all of this "to blow over while we are at the winchester"
```
// A case with effective social distancing

// Input
[
  [2, 0, 1, 0, 1, 2],
  [1, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1, 1],
  [2, 0, 1, 1, 0, 2],
  [1, 0, 0, 0, 1, 0],
  [2, 1, 0, 0, 2, 0]
]

// Output
[
  [2, 0, 1, 0, 2, 2],
  [2, 0, 0, 1, 0, 2],
  [0, 0, 1, 0, 2, 2],
  [2, 0, 1, 1, 0, 2],
  [2, 0, 0, 0, 2, 0],
  [2, 2, 0, 0, 2, 0]
]
Your community will prevail.

```

## Requirements


## Extras 
If time allows, feel free to include integration tests or unit tests if you are not
following TDD.

## For fun
Feel free to implement typescript into the build process.



### Mentions:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.