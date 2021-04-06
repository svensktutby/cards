import { InferActionsType } from '../../../main/bll/store';

export enum RecoveryPassActionType {
  FETCH_EMAIL_REQUEST = 'CARDS/RECOVERY_PASS/FETCH_EMAIL_REQUEST',
  FETCH_EMAIL_SUCCESS = 'CARDS/RECOVERY_PASS/FETCH_EMAIL_SUCCESS',
  FETCH_EMAIL_FAILURE = 'CARDS/RECOVERY_PASS/FETCH_EMAIL_FAILURE',
}

export const recoveryPassActions = {
  setRequest: (email: string) =>
    ({
      type: RecoveryPassActionType.FETCH_EMAIL_REQUEST,
      payload: {
        email,
      },
    } as const),
  setSuccess: () =>
    ({
      type: RecoveryPassActionType.FETCH_EMAIL_SUCCESS,
    } as const),
  setError: (error: string) =>
    ({
      type: RecoveryPassActionType.FETCH_EMAIL_FAILURE,
      payload: {
        error,
      },
    } as const),
};

export type RecoveryPassActionsType = InferActionsType<
  typeof recoveryPassActions
>;
