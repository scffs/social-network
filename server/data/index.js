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
        password: 'asdasda35rsdfsdf',
        picturePath: 'mary.jpg',
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
        picturePath: 'nikita.jpg',
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
        picturePath: 'man.jpg',
        friends: [],
        location: 'Город, Страна',
        occupation: 'Занятой',
        createdAt: 1683342957,
        updatedAt: 1683342957,
        __v: 0,
    },
];

export const posts = [
    {
        _id: createId(),
        userId: users[1]._id,
        firstName: users[1].firstName,
        lastName: users[1].lastName,
        location: users[1].location,
        description: 'Важная информация',
        userPicturePath: users[1].picturePath,
        likes: new Map([
            [users[0]._id.toString(), true],
        ])
    },
    {
        _id: createId(),
        userId: users[2]._id,
        firstName: users[2].firstName,
        lastName: users[2].lastName,
        location: users[2].location,
        description: 'Не менее важная информация',
        userPicturePath: users[1].picturePath,
        picturePath: 'ava.png',
        likes: new Map([
            [users[3]._id.toString(), true],
        ])
    },
];
