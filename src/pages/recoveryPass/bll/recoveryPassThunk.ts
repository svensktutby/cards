import { ThunkType } from '../../../main/bll/store';
import {
  recoveryPassActions,
  RecoveryPassActionsType,
} from './recoveryPassActions';
import { recoveryPassApi } from '../dal/recoveryPassApi';

const { setRequest, setSuccess, setError } = recoveryPassActions;

export const sendEmailAsync = (
  email: string,
): ThunkType<RecoveryPassActionsType> => async (dispatch) => {
  dispatch(setRequest(email));

  try {
    const { info, success } = await recoveryPassApi.sendEmail({ email });

    if (success) {
      dispatch(setSuccess());
      console.log(info);
    }
  } catch (e) {
    dispatch(setError(e));

    const error = e.response
      ? e.response.data.error
      : e.message + ', more details in the console';
    console.log('Error ', error);

    // console.log('Error', { ...error });
  }
};
