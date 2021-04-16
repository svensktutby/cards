export type RecoveryPassStateType = {
  loading: boolean;
  success: boolean;
  error: string;
};

export const recoveryPassInitState: RecoveryPassStateType = {
  loading: false,
  success: false,
  error: '',
};
