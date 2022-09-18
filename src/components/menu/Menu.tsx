import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { propsBurger } from 'components/main/Main';
import style from './Menu.module.scss';
import { ReactComponent as DiscussIcon } from '../../icons/discuss.svg';
import { ReactComponent as DashboardIcon } from '../../icons/dashboard.svg';
import { ReactComponent as GroupIcon } from '../../icons/group.svg';
import { ReactComponent as HeartIcon } from '../../icons/heart.svg';
import { ReactComponent as TeamIcon } from '../../icons/team.svg';
import { ReactComponent as Company } from '../../icons/company.svg';
import { ReactComponent as RocketIcon } from '../../icons/rocket.svg';
import { ReactComponent as NotifyIcon } from '../../icons/notify.svg';

interface IMenuItem {
  id: string;
  name: string;
  Icon: React.ElementType;
  path: string;
}

const mockMenuItems: IMenuItem[] = [
  {
    id: uuidv4(),
    name: 'Дашборд',
    Icon: DashboardIcon,
    path: '/empty',
  },
  {
    id: uuidv4(),
    name: 'Биржа активности',
    Icon: DiscussIcon,
    path: '/empty',
  },
  {
    id: uuidv4(),
    name: 'Биржа блогеров',
    Icon: GroupIcon,
    path: '/empty',
  },
  {
    id: uuidv4(),
    name: 'Взаимопиар',
    Icon: HeartIcon,
    path: '/empty',
  },
  {
    id: uuidv4(),
    name: 'Моя структура',
    Icon: TeamIcon,
    path: '/structure',
  },
  {
    id: uuidv4(),
    name: 'Магазин',
    Icon: Company,
    path: '/empty',
  },
  {
    id: uuidv4(),
    name: 'Марафон',
    Icon: RocketIcon,
    path: '/empty',
  },
  {
    id: uuidv4(),
    name: 'Лендинги',
    Icon: NotifyIcon,
    path: '/empty',
  },
];

export const Menu: React.FC<propsBurger> = ({ activeBurger, setActiveBurger }) => {
  const [activeMenu, setActiveMenu] = useState(0);

  const navigate = useNavigate();
  const navigateToMenu = (path: string) => {
    navigate(`${path}`);
  };

  return (
    <nav className={cn(style.menu, { [style.menu_burgerActive]: activeBurger })} onClick={() => setActiveBurger(false)}>
      <div className={style.blur} />
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
        {mockMenuItems.map(({ Icon, ...el }, index) => (
          <div
            className={cn(style.menu_item, { [style.active_menu]: activeMenu === index })}
            onClick={() => {
              setActiveMenu(index);
              navigateToMenu(el.path);
              setActiveBurger(false);
            }}
            key={el.id}
          >
            <Icon className={cn(style.menu_icon, { [style.active_icon]: activeMenu === index })} />
            <span className={style.menu_title}>{el.name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};
