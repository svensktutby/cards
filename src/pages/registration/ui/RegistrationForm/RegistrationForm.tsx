import React, {ChangeEvent, FC, FormEvent} from 'react';
import { Link } from 'react-router-dom';

import s from './RegistrationForm.module.scss'
import {InputText} from "../../../../common/ui/InputText";
import {Button} from "../../../../common/ui/Button";
import {LoginLinkType} from "./RegistrationFormContainer";


type PropsType = {
    email: string;
    setEmail: (email: ChangeEvent<HTMLInputElement>) => void;
    password: string;
    setPassword: (password: ChangeEvent<HTMLInputElement>) => void;
    repeatPass: string;
    setRepeatPass: (repeatPass:  ChangeEvent<HTMLInputElement>) => void;

    loginLink: LoginLinkType;
};

export const RegistrationForm: FC<PropsType> = ({
                                                    loginLink: { link, title },
                                                    email, setEmail,
                                                    password, setPassword,
                                                    repeatPass, setRepeatPass,
}) => {
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
    };

    return (
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

            <Button type="submit" >Sing Up</Button>

            <Link to={link} className={s.link}>
                {title}
            </Link>

        </form>
    );
};