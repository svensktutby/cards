import { ThunkType } from '../../../main/bll/store';
import {
  recoveryPassActions,
  RecoveryPassActionsType,
} from './recoveryPassActions';
import { recoveryPassApi } from '../dal/recoveryPassApi';

const { setLoading, setSuccess, setError } = recoveryPassActions;

export const sendEmailAsync = (
  email: string,
): ThunkType<RecoveryPassActionsType> => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const { info, success } = await recoveryPassApi.sendEmail({ email });

    if (success) {
      dispatch(setSuccess(success));
      console.log(info);
    }
  } catch (e) {
    const error = e.response
      ? e.response.data.error
      : e.message + ', more details in the console';
    console.log('Error ', error);

    dispatch(setError(error));
  }
};
