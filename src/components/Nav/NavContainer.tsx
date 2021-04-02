import React, { FC } from 'react';

import { PATH } from '../App/Routes';
import { Nav } from './Nav';

export const NavContainer: FC = () => {
  const navLinks = Object.values(PATH);
  const navLinksWithoutError404 = navLinks.slice(0, navLinks.length - 1);

  return <Nav navLinks={navLinksWithoutError404} />;
};
