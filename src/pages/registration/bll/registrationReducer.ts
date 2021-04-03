import { ThunkType } from '../../../main/bll/store';

export enum ActionType {
  SET_LOADING = 'CARDS/LOGIN/SET_LOADING',
}

const initialState: StateType = {};

export const registrationReducer = (
  state = initialState,
  action: ActionsType,
): StateType => {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return { ...state };

    default:
      return state;
  }
};

/** Actions */
const setLoading = () => ({ type: ActionType.SET_LOADING } as const);

/** Thunks */
export const loginTC = (): ThunkType<ActionsType> => async (dispatch) => {};

/** Types */
type StateType = {};

type ActionsType = ReturnType<typeof setLoading>;
