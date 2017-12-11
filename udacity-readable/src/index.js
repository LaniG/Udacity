import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import "./index.css";
import App from "./App";
import comments from "./features/comments/CommentReducer";
import posts from "./features/posts/PostReducer";
import categories from "./features/categories/CategoryReducer";
import common from "./features/common/CommonReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducers = combineReducers({ comments, posts, categories, common });
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const rootEl = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    rootEl
);

if (module.hot) {
    module.hot.accept("./App", () => {
        const NextApp = require("./App").default;
        ReactDOM.render(
            <Provider store={store}>
                <BrowserRouter>
                    <NextApp />
                </BrowserRouter>
            </Provider>,
            rootEl
        );
    });
}
