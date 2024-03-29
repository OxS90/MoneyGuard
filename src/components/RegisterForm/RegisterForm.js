import { useDispatch } from 'react-redux';
import { register } from '../../redux/authorisation/operations';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import logo from '../../assets/logo.svg';
import styles from './RegisterForm.module.css';

const ValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .max(12, 'Must be 12 characters or less')
    .required('Required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password mismatch')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const formData = {
      username: values.username.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    };
    dispatch(register(formData));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {({ values, handleChange }) => (
        <form className={styles.MainContainer}>
          <img
            src={logo}
            alt="Logo MoneyGuard"
            width="36px"
            height="36px"
            draggable="false"
          />
          <h3>MoneyGuard</h3>
          <label>
            Username:
            <input
              name="username"
              type="text"
              placeholder="Name"
              autoComplete="off"
              value={values.username}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Password:
            <input
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
            />
          </label>

          <label>
            Confirm Password:
            <input
              name="passwordConfirm"
              type="password"
              placeholder="Confirm password"
              autoComplete="off"
              value={values.passwordConfirm}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Register</button>
        </form>
      )}
    </Formik>
  );
};
