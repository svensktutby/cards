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
    case RecoveryPassActionType.FETCH_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: '',
        email: action.payload.email,
      };

    case RecoveryPassActionType.FETCH_EMAIL_SUCCESS:
      return { ...state, loading: false, success: true, error: '' };

    case RecoveryPassActionType.FETCH_EMAIL_FAILURE:
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
