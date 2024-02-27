import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import rootReducer from "./store/reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);