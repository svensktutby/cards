export enum ActionType {
  SET_LOADING = 'CARDS/LOGIN/SET_LOADING',
}

const initialState: StateType = {};

export const loginReducer = (
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
const initialApp = () => ({ type: ActionType.SET_LOADING } as const);

/** Thunks */

/** Types */
type StateType = {};

type ActionsType = ReturnType<typeof initialApp>;
