import React, { FC } from 'react';

export interface Menus {
  item: string;
  link: string;
}

interface MenuListProps {
  menus: Menus[];
}

const MenuList: FC<MenuListProps> = ({ menus }) => (
  <ul className="menu">
    {menus.map((menu, index) => (
      <li className="menu__list" key={index}>
        <a href={menu.link}>{menu.item}</a>
      </li>
    ))}
  </ul>
);

export default MenuList;
