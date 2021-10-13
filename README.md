# Getting Started with Create React App
React Hooks + Redux
## Available Scripts
### `npm install`
Install node_modules of project\

In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\

### `npm run build`
Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Deployment
### `npm run build` 


### Project Structure

├── build                    # All build-related code
├── public                   # Static public assets suchs as Fonts, Images, media... (not imported anywhere in source code)
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── index.jsx            # Application rendering
│   ├── _actions             # Redux action creators for the project
│   ├── _components          # Contains shared React components that can be used anywhere in the application
│   ├── _constants           # Redux action type constants used by redux action creators and reducers
│   ├── _helpers             # All the bits and pieces that don't fit into other folders but don't justify having a folder of their own
│   ├── _layouts             # Components that dictate major page structure
│   │   └── PageLayout       # Global application layout in which to render routes
│   ├── _reducers            # Redux reducers for the project
│   ├── _server              # Express application that provides webpack middleware
│   |   └── main.js          # Server application entry point
│   ├── _services            # Handles all http communication with backend apis for the application
│   ├── PrivateRoute         # Renders a route component if the user is logged in
│   ├── Router               # Main route definitions and async split points
│   │   ├── App.jsx          # Main application routes with store
│   │   ├── AuthenPage       # Fractal route
│   │   |   ├── index.js     # Route definitions and async split points
│   │   |   ├── AuthenPage   # Presentational React Components
│   │   |   ├── components   # Presentational React Components
│   │   |   └── routes **    # Fractal sub-routes (** optional)
│   │   ├── HomePage         # Fractal route
│   │   |   ├── index.js     # Route definitions and async split points
│   │   |   ├── HomePage     # Presentational React Components
│   │   |   ├── components   # Presentational React Components
│   │   |   └── routes **    # Fractal sub-routes (** optional)
│   └── Styles               # Application-wide styles (generally settings)