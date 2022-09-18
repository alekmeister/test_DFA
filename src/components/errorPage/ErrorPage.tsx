import React from 'react';
import style from './ErrorPage.module.scss';

export const ErrorPage: React.FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Данной страницы не существует... Пока что...</h1>
    </div>
  );
};
