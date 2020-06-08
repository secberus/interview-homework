# SECBERUS Live React coding challenge
> Instructions are short, sweet, and to the point. Ask questions if something is unclear. This task shouldnt take more than around an hour

## Situation
It's saturday, you got your hat on backwards, and it's time to party. You've been planning for this day all week, and you've decided that the best way to keep track of what you need to do is with a react-web application.

## Task
This will be a simulated team coding session.
- Create a list of items from /src/constants/TodoList.js
  - For each object, array, set, map, or list, make it a child in the tree.
- Make each item individually checkable. Checking a parent will check all children.
  - When an item is checked, make it a strikethrough, disabled-color, use an icon, or whatever you prefer, but it must be obvious that the item has been completed.
> Feel free to change the names of items in the list, but dont change structure. IE: If you dont eat eggs, you can change eggs to something vegan / else.

#### Example input
```
{
  "Item 1": [
    "Item 1a", "Item 1b"
  ],
  "Item 2": {
    "Item 2a": [
      "Item 2I",
      "Item 2II",
    ],
  },
}
```

#### Example output
> (As markup, this would be on the page rendered with elements, not text)
```
[ ] Item 1
  [ ] Item 1a
  [ ] Item 1b
[ ] Item 2
  [ ] Item 2a
    [ ] Item 2I
    [ ] Item 2II
```
### Skillset:
- Use Redux to manage tasks
  - Use immer to manage the immutability of the state
- Hooks/Functional components are _preferred_.

### Purpose of task
- Simple test to show skills traversing complex/inconsistent datasets
- Skills in generic React/Redux

### Extra Flex-points (Dont think about these too much.)
- Make the item parents able to expand/contract their children
- Make it pretty
- Be able to create/remove items in the list.
- Compliance for ADA (aria-compliance, etc)

## Extra info

You can add or change dependencies, but existing dependencies must stay.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
