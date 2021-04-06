import React, {FC, useState} from 'react';

import s from './RegistrationPage.module.scss';
import {InputText} from "../../../common/ui/InputText";
import {Button} from "../../../common/ui/Button";
import {PATH} from "../../../main/ui/App/Routes";
import {Link} from "react-router-dom";





export const RegistrationPage: FC = () => {

    return (
        <section className={s.page}>
            <h2>Registration</h2>
            <div>
                <InputText
                    placeholder={'email'}
                    type={'email'}
                />
            </div>
            <div>
                <InputText placeholder={'password'}
                           type={'password'}
                />
            </div>
            <div>
                <InputText placeholder={'repeat password'}
                           type={'password'}
                />
            </div>
            <div className={s.block}><Button>Sing Up</Button></div>
            <div className={s.block}>
                <Link to={PATH.LOGIN} >
                    Login
                </Link>
            </div>
        </section>
    );
};
