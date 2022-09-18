import React from 'react';
import style from './Main.module.scss';
import { Header } from './header/Header';
import { Board } from './board/Board';

export interface propsBurger {
  activeBurger: boolean;
  setActiveBurger: (value: boolean) => void;
}

export const Main: React.FC<propsBurger> = ({ activeBurger, setActiveBurger }) => {
  return (
    <div className={style.main}>
      <Header activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
      <Board />
    </div>
  );
};
