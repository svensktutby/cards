import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

import s from './RegistrationForm.module.scss'
import {InputText} from "../../../../common/ui/InputText";
import {Button} from "../../../../common/ui/Button";
import {LoginLinkType} from "./RegistrationFormContainer";
import {PATH} from "../../../../main/ui/App/Routes";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../../main/bll/store";
import {setError, setSuccess} from "../../bll/registrationReducer";


type PropsType = {
    email: string;
    setEmail: (email: ChangeEvent<HTMLInputElement>) => void;
    password: string;
    setPassword: (password: ChangeEvent<HTMLInputElement>) => void;
    repeatPass: string;
    setRepeatPass: (repeatPass: ChangeEvent<HTMLInputElement>) => void;

    singUp: () => void
    loginLink: LoginLinkType;
};

export const RegistrationForm: FC<PropsType> = ({
                                                    loginLink: {link, title},
                                                    email, setEmail,
                                                    password, setPassword,
                                                    repeatPass, setRepeatPass,
                                                    singUp
                                                }) => {

    const success = useSelector<RootStateType, boolean>(state => state.register.success);
    const error = useSelector<RootStateType, string>(state => state.register.error);
    const [redirect, setRedirect] = useState<boolean>(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (success) dispatch(setSuccess(false));
        if (error) dispatch(setError(''));

        if (success && !redirect) setTimeout(() => setRedirect(true), 500);
    }, [ success, error, dispatch, redirect, setRedirect]);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
    };

    if (redirect && success) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return <>
        <form className={s.form} onSubmit={submitHandler}>
            <InputText type="email"
                       placeholder="Email"
                       value={email}
                       onChange={setEmail}
            />
            <InputText type="password"
                       placeholder="Password"
                       value={password}
                       onChange={setPassword}
            />
            <InputText type="password"
                       placeholder="Repeat password"
                       value={repeatPass}
                       onChange={setRepeatPass}
            />

            <Button type="submit" onClick={singUp}>Sing Up</Button>

            <Link to={link} className={s.link}>
                {title}
            </Link>

        </form>

    </>
};