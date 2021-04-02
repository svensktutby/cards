import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Middleware,
  Action,
} from 'redux';
import thunk, { ThunkAction, ThunkMiddleware } from 'redux-thunk';

import { appReducer } from './appReducer';

const DEV = process.env.NODE_ENV !== 'production';

const rootReducer = combineReducers({
  app: appReducer,
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
