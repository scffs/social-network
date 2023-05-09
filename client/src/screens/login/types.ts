import { FormikHelpers } from 'formik';

export type FormValues = {
  firstName?: string;
  lastName?: string;
  age?: string;
  email: string;
  password: string;
  location?: string;
  occupation?: string;
  picture?: {
    name: string;
  };
  [key: string]: any;
};

export type SubmitHandler<T> = (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>;
