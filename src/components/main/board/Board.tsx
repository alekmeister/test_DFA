import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './Board.module.scss';

export const Board: React.FC = () => {
  return (
    <div className={style.board}>
      <div className={style.container}>
        <Outlet />
      </div>
    </div>
  );
};
