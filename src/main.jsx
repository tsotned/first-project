import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { createStore } from "redux";
import { Provider } from "react-redux";
import { store } from "./store.js";
// import depositReducer from "./pages/redux/reducer/depositReducer.js";
// import allReducers from "./pages/redux/reducer/index.js";

// // action
// export const depositAction = (amount) => {
//   return {
//     type: "deposit",
//     payload: amount,
//   };
// };

// export const withdrawAction = (amount) => {
//   return {
//     type: "withdraw",
//     payload: amount,
//   };
// };

// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// store.subscribe(() => console.log(store.getState()));

// store.dispatch(depositAction(5))

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
