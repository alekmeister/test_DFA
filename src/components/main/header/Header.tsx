import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line import/no-cycle
import { propsBurger } from 'components/main/Main';
import style from './Header.module.scss';
import Modal from '../../../modal/Modal';

const validPassword = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
const FORM_VALUES = {
  email: '',
  password: '',
};
const Info = [
  { name: 'email', placeholder: 'E-mail' },
  { name: 'password', placeholder: 'Пароль' },
];

export const Header: React.FC<propsBurger> = ({ activeBurger, setActiveBurger }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <header className={style.header}>
        <div className={style.burger_btn} onClick={() => setActiveBurger(!activeBurger)}>
          <span />
        </div>
        <div className={style.element} onClick={() => setModalActive(true)}>
          Мероприятия
        </div>
      </header>
      <Modal active={modalActive} setActive={setModalActive}>
        <Formik
          initialValues={FORM_VALUES}
          validationSchema={Yup.object({
            email: Yup.string().email('Неправильный email').required('Обязательное поле'),
            password: Yup.string().matches(validPassword, 'Пароль должен быть на латинице, содержать не менее 8 символов, один в верхнем регистре, одну цифру и один символ').required('Обязательное поле'),
          })}
          onSubmit={(user, { resetForm }) => {
            resetForm();
            setModalActive(false);
          }}
        >
          <Form className={style.form}>
            {Info.map(({ placeholder, name }) => (
              <div className={style.form_inner} key={uuidv4()}>
                <Field className={style.field} placeholder={placeholder} name={name} />
                <ErrorMessage className={style.valid} name={name} component="div" />
              </div>
            ))}
            <button className={style.button} type="submit">
              Отправить
            </button>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};
