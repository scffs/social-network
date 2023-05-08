import mongoose from 'mongoose';

const createId = () => {
    return new mongoose.Types.ObjectId();
}

const userIds = [
    createId(),
    createId(),
    createId(),
    createId(),
];

export const users = [
    {
        _id: userIds[0],
        firstName: 'Мария',
        lastName: 'Захарова',
        age: 30,
        email: 'mary@mail.ru',
        password: 'X5S~{WQ>`T*~h(c{',
        picturePath: '',
        friends: [],
        location: 'Россия, Москва',
        occupation: 'МГУ',
        createdAt: 1683342707,
        updatedAt: 1683342707,
        __v: 0,
    },
    {
        _id: userIds[1],
        firstName: 'Семён',
        lastName: 'Окулов',
        age: 18,
        email: 'khidey@inbox.ru',
        password: 'G9mscsgziO428kJ',
        picturePath: 'ava.png',
        friends: [],
        location: 'Россия, Томск',
        occupation: 'ТЭПК',
        createdAt: 1683342767,
        updatedAt: 1683342767,
        __v: 0,
    },
    {
        _id: userIds[2],
        firstName: 'Никита',
        lastName: 'Холин',
        age: 19,
        email: 'zintosion@yandex.ru',
        password: '1bb5OmyQx18WDTx',
        picturePath: 'ava.png',
        friends: [],
        location: 'Россия, Москва',
        occupation: 'МФЮА',
        createdAt: 1683342837,
        updatedAt: 1683342837,
        __v: 0,
    },
    {
        _id: userIds[3],
        firstName: 'Человек',
        lastName: 'Человеков',
        age: 99,
        email: 'man@gmail.com',
        password: '59dKXw0Y472OuWg',
        picturePath: 'ava.png',
        friends: [],
        location: 'Город, Страна',
        occupation: 'Занятой',
        createdAt: 1683342957,
        updatedAt: 1683342957,
        __v: 0,
    },
];
