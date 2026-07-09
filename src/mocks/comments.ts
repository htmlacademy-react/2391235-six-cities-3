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
];

export default comments;
