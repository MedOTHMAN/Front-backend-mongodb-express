import { createStore, applyMiddleware , compose} from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  
);

export default store;

//compose est utilisé pour executer deux ou plus d'execution au meme temps, en plus "createstore ne peut pas supporter plus que deux instruction"