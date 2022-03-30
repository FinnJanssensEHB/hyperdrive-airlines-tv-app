import { Reducer, combineReducers, applyMiddleware, createStore } from "redux";
import { showReducer } from "./Shows/Reducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { StoreState } from "./store.types";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers<Reducer>({
  shows: showReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const useTypedSelector: TypedUseSelectorHook<StoreState> = useSelector;

export { store };
