/*Store creation*/
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";
import users from "src/redux/reducers/users";


export default () => {
	const middleware = applyMiddleware(reduxThunk);
	const store = createStore(
		combineReducers({
			users
		}),
		compose(middleware)
	);
	return store;
};