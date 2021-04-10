import React, {ChangeEvent, FC, useCallback, useState} from 'react';

import {
    capitalizeFirstLetter,
    transformLinkToTitle,
} from '../../../../utils/textTransform';
import {PATH} from '../../../../main/ui/App/Routes';
import {RegistrationForm} from "./RegistrationForm";
import {useDispatch} from "react-redux";
import {registrationTC} from "../../bll/registrationReducer";



export const RegistrationFormContainer: FC = () => {
    const {LOGIN} = PATH;
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPass, setRepeatPass] = useState<string>('');

    const setEmailCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value),
        [setEmail]
    );
    const setPasswordCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value),
        [setPassword]
    );
    const setRepeatPassCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setRepeatPass(e.currentTarget.value),
        [setRepeatPass]
    );
    const dispatch = useDispatch();
    const singUp = useCallback(
        () => dispatch(registrationTC(email, password, repeatPass)),
        [email, password, repeatPass, dispatch]
    )


    const loginLink: LoginLinkType = {
        link: LOGIN,
        title: capitalizeFirstLetter(transformLinkToTitle(LOGIN)),
    };

    return <RegistrationForm
        email={email} setEmail={setEmailCallback}
        password={password} setPassword={setPasswordCallback}
        repeatPass={repeatPass} setRepeatPass={setRepeatPassCallback}
        singUp={singUp}
        loginLink={loginLink}/>;
};

export type LoginLinkType = {
    link: string;
    title: string;
};

export type DataRegistrationType = {
    email: string,
    password: string,
    repeatPass: string;
}
