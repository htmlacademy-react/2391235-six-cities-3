import { Comment } from '@/types/offer';

const comments: Comment[] = [
  {
    id: '1',
    date: '2019-04-24T14:13:56.569Z',
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: '2',
    date: '2020-08-10T12:00:00.000Z',
    user: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    comment:
      'The house is amazing. Location is perfect and the host was very helpful.',
    rating: 5,
  },
  {
    id: '3',
    date: '2021-01-15T09:30:00.000Z',
    user: {
      name: 'Alex',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'Nice place to stay. Clean rooms and beautiful neighbourhood.',
    rating: 4,
  },
];

export default comments;
