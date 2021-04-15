import { ThunkType } from '../../../main/bll/store';
import {authAPI} from "../dall/api";



export enum ActionType {
  SET_LOADING = 'CARDS/LOGIN/SET_LOADING',
  SET_SUCCESS = 'CARDS/REGISTRATION/SET_SUCCESS',
  SET_ERROR = 'CARDS/REGISTRATION/SET_ERROR'
}

const initialState: StateType = {
  loading: false,
  success: false,
  error: '',
};

export const registrationReducer = (
  state = initialState,
  action: ActionsType,
): StateType => {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return {
          ...state ,
          loading: action.loading,
          success: false,
          error: '',
      };
      case ActionType.SET_SUCCESS:
          return {
              ...state ,
              loading: false,
              success: action.success,
              error: '',
          };
      case ActionType.SET_ERROR:
          return {
              ...state ,
              loading: false,
              success: false,
              error: action.error,
          };

    default:
      return state;
  }
};

/** Actions */
export const setLoading = (loading: boolean) => ({
    type: ActionType.SET_LOADING,
        loading,
     } as const);
export const setSuccess = (success: boolean) => ({
    type: ActionType.SET_SUCCESS,
        success,
     } as const);
export const setError = (error: string) => ({
    type: ActionType.SET_ERROR,
    error,
     } as const);

/** Thunks */
export const registrationTC = (email: string, password: string, repeatPass: string): ThunkType<ActionsType> => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await authAPI.registration(email, password);
        dispatch(setSuccess(response.success));
        dispatch(setLoading(false));
    }
    catch (e) {
        dispatch(setSuccess(false));
        dispatch(setError(e));
    }
};

/** Types */
type StateType = {
  loading: boolean;
  success: boolean;
  error: string;
};

type ActionsType = ReturnType<typeof setLoading>
   | ReturnType<typeof setSuccess>
   | ReturnType<typeof setError>;
