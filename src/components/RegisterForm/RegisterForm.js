import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/authorisation/operations';
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik } from 'formik';
import logo from '../../assets/icons/logo.svg';
import mail from '../../assets/icons/mail.svg';
import lock from '../../assets/icons/lock.svg';
import name from '../../assets/icons/name.svg';
import ProgressBar from './ProgressBar';
import CustomButton from '../CustomElements/CustomButton/CustomButton';
import styles from './RegisterForm.module.css';

const ValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(4, 'Must be at least 4 characters')
    .max(12, 'Must be 12 characters or less')
    .required('Required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password mismatch')
    .required('Required'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');

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
      {({ values, handleSubmit }) => (
        <div className={styles.FormWrapper}>
          <form onSubmit={handleSubmit} className={styles.Form}>
            <div className={styles.Logo}>
              <img
                src={logo}
                className={styles.LogoIcon}
                alt="Logo MoneyGuard"
                draggable="false"
              />
              <h3 className={styles.LogoText}>MoneyGuard</h3>
            </div>
            <label className={styles.Input}>
              <img
                src={name}
                alt="name"
                width="24px"
                height="24px"
                draggable="false"
              />
              <Field
                name="username"
                type="text"
                placeholder="Name"
                className={styles.InputField}
              />
              <div className={styles.error}>
                <ErrorMessage name="username" component="div" />
              </div>
            </label>

            <label className={styles.Input}>
              <img
                src={mail}
                alt="mail"
                width="24px"
                height="24px"
                draggable="false"
              />
              <Field
                name="email"
                type="email"
                placeholder="E-mail"
                autoComplete="off"
                className={styles.InputField}
              />
              <div className={styles.error}>
                <ErrorMessage name="email" component="div" />
              </div>
            </label>

            <label className={styles.Input}>
              <img
                src={lock}
                alt="lock"
                width="24px"
                height="24px"
                draggable="false"
              />
              <Field
                className={styles.InputField}
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="off"
                value={values.password}
                onChange={e => {
                  values.password = e.target.value;
                  setPassword(e.target.value);
                }}
              />
              <div className={styles.error}>
                <ErrorMessage name="password" component="div" />
              </div>
            </label>
            <div className={styles.InputWrapper}>
              <label className={`${styles.Input} ${styles.LastChild}`}>
                <img
                  src={lock}
                  alt="lock"
                  width="24px"
                  height="24px"
                  draggable="false"
                />
                <Field
                  className={styles.InputField}
                  name="passwordConfirm"
                  type="password"
                  placeholder="Confirm password"
                  autoComplete="off"
                />

                <div className={styles.error}>
                  <ErrorMessage name="passwordConfirm" component="div" />
                </div>
              </label>
              <ProgressBar password={password} className={styles.ProgressBar} />
            </div>

            <CustomButton type="submit">Register</CustomButton>
            <CustomButton isNavLink to="/login">
              Log In
            </CustomButton>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
