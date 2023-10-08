import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';

const phoneRegex = RegExp(/^\(?([0-9]{3})[-. ]?([0-9]{4})$/);

const formShema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too Long!')
    .required('This field is required!'),
  number: Yup.string()
    .matches(phoneRegex, 'Invalid phone')
    .required('Phone is required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formShema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="number">Number</label>
        <Field id="number" type="number" name="number" />
        <ErrorMessage name="number" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
