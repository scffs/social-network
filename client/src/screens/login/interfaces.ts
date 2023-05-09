import { FormikHelpers } from 'formik';
import { User } from '../../slice/interfaces';

export interface FormValues {
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
}

export interface SubmitHandler<T> {
  (values: T, formikHelpers: FormikHelpers<T>): void | Promise<any>
}

export interface LoggedIn {
  user: User;
  token: string;
}
