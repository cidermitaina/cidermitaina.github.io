import React, { FC } from 'react';
import MenuList, { Menus } from './MenuList';

import './index.scss';

const Menu: FC<{}> = () => {
  const menus: Menus[] = [
    {
      item: 'Top',
      link: '#top',
    },
    {
      item: 'About',
      link: '#about',
    },
    {
      item: 'Works',
      link: '#works',
    },
    {
      item: 'Contact',
      link: '#contact',
    }
  ];

  return (
    <div className="box">
      <div className="box__wrap">
        <MenuList menus={menus} />
      </div>
    </div>
  );
}

export default Menu;
