import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Profile } from '../pages/Profile';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';
import { RecoveryPassword } from '../pages/RecoveryPassword';
import { NewPassword } from '../pages/NewPassword';
import { TestContainer } from '../pages/Test/TestContainer';
import { Error404 } from '../pages/Error404';

export const PATH = {
  PROFILE: '/profile',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  RECOVERY_PASSWORD: '/recovery-password',
  NEW_PASSWORD: '/new-password',
  TEST: '/test',
  ERROR_404: '/404',
};

export const Routes: FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Redirect to={PATH.PROFILE} />} />

        <Route path={PATH.PROFILE} render={() => <Profile />} />
        <Route path={PATH.LOGIN} render={() => <Login />} />
        <Route path={PATH.REGISTRATION} render={() => <Registration />} />
        <Route
          path={PATH.RECOVERY_PASSWORD}
          render={() => <RecoveryPassword />}
        />
        <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword />} />
        <Route path={PATH.TEST} render={() => <TestContainer />} />
        <Route path={PATH.ERROR_404} render={() => <Error404 />} />

        <Redirect from="*" to={PATH.ERROR_404} />
      </Switch>
    </>
  );
};
