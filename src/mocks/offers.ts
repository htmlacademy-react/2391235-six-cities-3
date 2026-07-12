import { Offer } from '@/types/offer';

const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/apartment-01.jpg',
    description:
      'A quiet cozy and picturesque place in Amsterdam.',
    bedrooms: 3,
    goods: ['Wi-Fi', 'Heating', 'Kitchen'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
    ],
    maxAdults: 4,
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/room.jpg',
    description:
      'A stylish room with warm wooden details and a calm atmosphere.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Towels', 'Heating'],
    host: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    images: [
      'img/room.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
    ],
    maxAdults: 2,
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-02.jpg',
    description:
      'A bright apartment with a beautiful canal view and comfortable rooms.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Coffee machine'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    images: [
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg',
    ],
    maxAdults: 3,
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg',
    description:
      'A cozy apartment with a big bed, soft light and everything for a good stay.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Heating', 'Dishwasher'],
    host: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    images: [
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/studio-01.jpg',
    ],
    maxAdults: 4,
  },
];

export default offers;
