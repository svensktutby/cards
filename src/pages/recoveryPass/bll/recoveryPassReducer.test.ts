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
    };
  });

  it('should handle setRequest', () => {
    const action = recoveryPassActions.setLoading(true);

    const newState = recoveryPassReducer(state, action);

    expect(newState.loading).toBeTruthy();
    expect(newState.success).toBeFalsy();
    expect(newState.error).toBe('');
  });

  it('should handle setSuccess', () => {
    const action = recoveryPassActions.setSuccess(true);

    const newState = recoveryPassReducer(state, action);

    expect(newState.loading).toBeFalsy();
    expect(newState.success).toBeTruthy();
    expect(newState.error).toBe('');
  });

  it('should handle setError', () => {
    const action = recoveryPassActions.setError('an error');

    const newState = recoveryPassReducer(state, action);

    expect(newState.loading).toBeFalsy();
    expect(newState.success).toBeFalsy();
    expect(newState.error).toBe('an error');
  });
});
