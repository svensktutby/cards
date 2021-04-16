import {
  RecoveryPassActionsType,
  RecoveryPassActionType,
} from './recoveryPassActions';
import {
  recoveryPassInitState,
  RecoveryPassStateType,
} from './recoveryPassState';

export const recoveryPassReducer = (
  state = recoveryPassInitState,
  action: RecoveryPassActionsType,
): RecoveryPassStateType => {
  switch (action.type) {
    case RecoveryPassActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
        success: false,
        error: '',
      };

    case RecoveryPassActionType.SET_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        error: '',
      };

    case RecoveryPassActionType.SET_ERROR:
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
