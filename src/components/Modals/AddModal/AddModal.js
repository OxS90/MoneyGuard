import { ErrorMessage, Formik, Field } from 'formik';
import { object, string, number } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; // Import useEffect from 'react'
import {
  addTransaction,
  getCategories,
} from '../../../redux/transactions/operations';
import { RiCalendar2Fill } from 'react-icons/ri';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef } from 'react';
import { selectCategories } from '../../../redux/transactions/selectors';

const addSchema = object({
  value: number().positive().required('Amount is required'),
  comment: string()
    .max(30, 'Maximum must be 30 characters')
    .required('Please fill in comment'),
  category: string().required('Category is required'),
});

const initialValues = {
  type: 'EXPENCE',
  category: '',
  value: '',
  date: new Date(),
  comment: '',
};

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <>
    <input type="text" value={value} onClick={onClick} ref={ref} readOnly />
    <RiCalendar2Fill onClick={onClick} />
  </>
));

export default function AddTransaction() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addTransaction(values));
    resetForm();
  };
  console.log(categories);
  return (
    <>
      <title>Add transaction</title>
      <Formik
        initialValues={initialValues}
        validationSchema={addSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <form autoComplete="off">
            <label>
              <Field name="type" type="hidden" />
            </label>
            <label>
              <Field name="category" as="select">
                <option value="">Select Category</option>
                {/* Corrected categories mapping */}
                {categories &&
                  categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </Field>
              <ErrorMessage name="category" component="div" />
            </label>
            <label>
              <Field name="value" type="number" placeholder="Amount" />
              <ErrorMessage name="value" component="div" />
            </label>
            <label>
              <Field name="date">
                {({ field, form, meta }) => (
                  <DatePicker
                    {...field}
                    dateFormat="dd.MM.yyyy"
                    maxDate={new Date()}
                    selected={field.value}
                    onChange={date => setFieldValue('date', date)}
                    shouldCloseOnSelect={true}
                    customInput={<CustomInput value={field.value} />}
                  />
                )}
              </Field>
            </label>
            <label>
              <Field name="comment" as="textarea" placeholder="Comment" />
              <ErrorMessage name="comment" component="div" />
            </label>
            <button type="submit">Add</button>
          </form>
        )}
      </Formik>
    </>
  );
}
