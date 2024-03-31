import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/authorisation/operations';
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik } from 'formik';
import logo from '../../assets/logo.svg';
import ProgressBar from './ProgressBar';
import CustomButton from '../CustomElements/CustomButton/CustomButton';
// import styles from './RegisterForm.module.css';

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
        <form onSubmit={handleSubmit} autoComplete="off">
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
            <Field
              name="username"
              type="text"
              placeholder="Name"
              autoComplete="off"
            />
            <ErrorMessage component="span" name="username" />
          </label>

          <label>
            Email:
            <Field
              name="email"
              type="email"
              placeholder="E-mail"
              autoComplete="off"
            />
            <ErrorMessage component="span" name="email" />
          </label>

          <label>
            Password:
            <Field
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
            <ErrorMessage component="span" name="password" />
          </label>

          <label>
            Confirm Password:
            <Field
              name="passwordConfirm"
              type="password"
              placeholder="Confirm password"
              autoComplete="off"
            />
            <ProgressBar password={password} />
            <ErrorMessage component="span" name="passwordConfirm" />
          </label>

          <CustomButton type="submit">Register</CustomButton>
          <CustomButton isNavLink to="/login">
            Log In
          </CustomButton>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
