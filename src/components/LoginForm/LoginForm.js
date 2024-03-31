import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authorisation/operations';
import { Formik, Field, ErrorMessage } from 'formik'; // Import Field and ErrorMessage from Formik
import * as Yup from 'yup';
import logo from '../../assets/logo.svg';
import CustomButton from '../CustomElements/CustomButton/CustomButton';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const formData = {
      email: values.email.trim(),
      password: values.password.trim(),
    };
    dispatch(logIn(formData));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    >
      {(
        { handleSubmit } // Destructure handleSubmit from Formik
      ) => (
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
            Email
            <Field type="email" name="email" placeholder="E-mail" />
            <ErrorMessage name="email" component="div" className="error" />
          </label>
          <label>
            Password
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error" />
          </label>
          <CustomButton type="submit">Log In</CustomButton>
          <CustomButton isNavLink to="/register">
            Register
          </CustomButton>
        </form>
      )}
    </Formik>
  );
};
