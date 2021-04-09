import { ThunkType } from '../../../main/bll/store';

export enum loginActionType {
  SET_LOADING = 'CARDS/LOGIN/SET_LOADING',
  SET_USER = 'CARDS/LOGIN/SET_USER',
  SET_ERROR = 'CARDS/LOGIN/SET_ERROR',
  SET_SUCCESS = 'CARDS/LOGIN/SET_SUCCESS'
}

const initialState: StateType = {
  user: {
    _id: '',
    email: '',
    name: '',
    publicCardPacksCount: 0, // количество колод

    created: new Date(),
    updated: new Date(),
    isAdmin: false,
    verified: false, // подтвердил ли почту
    rememberMe: false,
  },
  loading: false,
  success: false,
  error: '',
};

export const loginReducer = (
  state = initialState,
  action: ActionsType,
): StateType => {
  switch (action.type) {
    case loginActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
        success: false,
        error: '',
      };
    case loginActionType.SET_USER:
      return { ...state, user: action.user };
    case loginActionType.SET_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        error: '',
      };
    case loginActionType.SET_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

/** Actions */
export const setLoading = (loading: boolean) => ({
  type: loginActionType.SET_LOADING,
  payload: {
    loading,
  },
} as const);
export const setSuccess = (success: boolean) =>
  ({
    type: loginActionType.SET_SUCCESS,
    payload: {
      success,
    },
  } as const);
export const setUser = (user: UserType) => ({ type: loginActionType.SET_USER, user } as const);
export const setError = (error: string) =>
  ({
    type: loginActionType.SET_ERROR,
    payload: {
      error,
    },
  } as const);

/** Thunks */
export const loginTC = (): ThunkType<ActionsType> => async (dispatch) => {
};

/** Types */
type StateType = {
  user: UserType;
  loading: boolean;
  success: boolean;
  error: string;
};

type ActionsType = ReturnType<typeof setLoading>
  | ReturnType<typeof setUser>
  | ReturnType<typeof setError>
  | ReturnType<typeof setSuccess>;

export type UserType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number; // количество колод

  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;

  error?: string;
}