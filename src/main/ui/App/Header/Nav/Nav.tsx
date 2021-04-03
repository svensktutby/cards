import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import s from './Nav.module.scss';
import { randomId } from '../../../../../utils/randomId';
import { NavLinkType } from './NavContainer';

type PropsType = {
  navLinks: Array<NavLinkType>;
};

export const Nav: FC<PropsType> = ({ navLinks }) => {
  return (
    <nav className={s.nav}>
      <input className={s.nav__control} type="checkbox" id="menu-cb" />

      <div className={s.nav__content}>
        <ul className={s.nav__items}>
          {navLinks.map(({ link, title }) => (
            <li key={randomId()} className={s.nav__item}>
              <NavLink
                className={s.nav__item_link}
                exact
                to={link}
                activeClassName={s.nav__item_link_active}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <label className={s.nav__btn} htmlFor="menu-cb" />
    </nav>
  );
};
