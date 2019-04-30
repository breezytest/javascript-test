import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import App_router from "./routers/App_router";
import configureStore from  "./redux/store/configure_store";

import "./styles/styles.scss";
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.css";

import "@babel/polyfill/noConflict";

const store = configureStore();
const jsx = (
	<Provider store={store}>
		<App_router />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));