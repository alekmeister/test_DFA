import React from 'react';
import style from './EmptyBoard.module.scss';

export const EmptyBoard: React.FC = () => {
  return (
    <div className={style.container}>
      <span className={style.title}>В процессе разработки...</span>
    </div>
  );
};
