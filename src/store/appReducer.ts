export enum ActionType {
  INITIAL_APP = 'PP/APP/INITIAL_APP',
}

const initialState: AppStateType = {};

export const appReducer = (
  state = initialState,
  action: ActionsType,
): AppStateType => {
  switch (action.type) {
    case ActionType.INITIAL_APP:
      return { ...state };

    default:
      return state;
  }
};

/** Actions */
const initialApp = () => ({ type: ActionType.INITIAL_APP });

/** Thunks */

/** Types */
export type AppStateType = {};

type ActionsType = ReturnType<typeof initialApp>;
