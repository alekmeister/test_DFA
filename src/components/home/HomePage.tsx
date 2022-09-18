import React, { useState } from 'react';
import style from './Home.module.scss';
import { Main } from '../main/Main';
import { Menu } from '../menu/Menu';

export const HomePage = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  if (activeBurger) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll';
  }
  return (
    <div className={style.container}>
      <Menu activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
      <Main activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
    </div>
  );
};
