import * as yup from 'yup';


export const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    firstName: yup
       .string('Enter your Firstname')
      .max(20, 'Must be 15 characters or less')
      .required('Required'),
    lastName: yup
      .string('Enter your Lastname')
      .max(25, 'Must be 15 characters or less')
      .required('Required'),
    password: yup
      .string('Enter your password')
      .min(5, 'Password should be of minimum 5 characters length')
      .required('Password is required'),
    password2: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
});

export const validationSchemaLogIn = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(5, 'Password should be of minimum 5 characters length')
      .required('Password is required'),
});