import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import s from './Nav.module.scss';
import { PATH } from '../App/Routes';
import { randomId } from '../../utils/randomId';
import { capitalizeFirstLetter } from '../../utils/textTransform';

export const Nav: FC = () => {
  const navLinks = Object.values(PATH);
  const navLinksWithoutError404 = navLinks.slice(0, navLinks.length - 1);

  return (
    <nav className={s.nav}>
      <input className={s.nav__control} type="checkbox" id="menu-cb" />

      <div className={s.nav__content}>
        <ul className={s.nav__items}>
          {navLinksWithoutError404.map((link) => (
            <li key={randomId()} className={s.nav__item}>
              <NavLink
                className={s.nav__item_link}
                exact
                to={link}
                activeClassName={s.nav__item_link_active}
              >
                {capitalizeFirstLetter(
                  link.slice(1, link.length).replace(/-/, ' '),
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <label className={s.nav__btn} htmlFor="menu-cb" />
    </nav>
  );
};
