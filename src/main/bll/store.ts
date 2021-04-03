import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Middleware,
  Action,
} from 'redux';
import thunk, { ThunkAction, ThunkMiddleware } from 'redux-thunk';

import { DEV } from '../../config';
import { loginReducer } from '../../pages/login/bll/loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

// @ts-ignore next line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = DEV && devtools ? devtools : compose;

const middleware: Array<Middleware> = [thunk as ThunkMiddleware<RootStateType>];

export const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancedStore);

/** Types */
export type RootStateType = ReturnType<typeof rootReducer>;

export type ThunkType<
  A extends Action = Action,
  R = Promise<void>,
  S = RootStateType
> = ThunkAction<R, S, unknown, A>;

if (DEV) {
  // @ts-ignore next line
  window.store = store;
}
