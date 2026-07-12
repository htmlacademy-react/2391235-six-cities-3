/*import { createReducer } from '@reduxjs/toolkit';
import { OfferPreview } from '@/types/offer';
import offers from '@/mocks/offers';
import { changeCity, fillOffers } from '@/store/action';

type InitialState = {
  city: string;
  offers: OfferPreview[];
};

const initialState: InitialState = {
  city: 'Paris',
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };*/
