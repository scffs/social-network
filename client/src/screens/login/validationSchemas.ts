import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  firstName: yup.string().matches(/^[A-Za-zА-Яа-яЁё]*$/, 'Имя может содержать только буквы').required('Заполните поле'),
  lastName: yup.string().matches(/^[A-Za-zА-Яа-яЁё]*$/, 'Фамилия может содержать только буквы').required('Заполните поле'),
  age: yup.number().typeError('Возраст должен быть числом').min(14, 'Возраст должен быть больше или равен 14').max(100, 'Возраст должен быть меньше или равен 100')
    .required('Заполните поле'),
  email: yup.string().email('Введите корректную почту').required('Заполните поле'),
  password: yup.string().required('Заполните поле'),
  location: yup.string().required('Заполните поле'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('Введите корректную почту').required('Заполните поле'),
  password: yup.string().required('Заполните поле'),
});
