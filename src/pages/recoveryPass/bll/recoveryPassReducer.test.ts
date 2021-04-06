import { recoveryPassReducer } from './recoveryPassReducer';
import { recoveryPassActions } from './recoveryPassActions';
import { RecoveryPassStateType } from './recoveryPassState';

describe('recoveryPass reducer', () => {
  let state: RecoveryPassStateType;

  beforeEach(() => {
    state = {
      loading: false,
      success: false,
      error: '',
      email: '',
    };
  });

  it('should handle setRequest', () => {
    const action = recoveryPassActions.setRequest('test@mail.com');

    const newState = recoveryPassReducer(state, action);

    expect(newState.loading).toBeTruthy();
    expect(newState.email).toBe('test@mail.com');
  });

  it('should handle setSuccess', () => {
    const action = recoveryPassActions.setSuccess();

    const newState = recoveryPassReducer(state, action);

    expect(newState.loading).toBeFalsy();
    expect(newState.success).toBeTruthy();
  });

  it('should handle setError', () => {
    const action = recoveryPassActions.setError('an error');

    const newState = recoveryPassReducer(state, action);

    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBe('an error');
  });
});
