import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Rockets from '../Components/rockets/Rockets';
import { getRockets } from '../features/rocketsSlice';

const mockStore = configureMockStore([thunk]);
jest.mock('../features/rocketsSlice', () => ({
  getRockets: jest.fn(),
}));
describe('Rockets component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rocket: {
        rockets: [
          {
            id: 'falcon9',
            name: 'Falcon 9',
            description: 'A partially reusable medium-lift launch vehicle',
            flickr_images: [
              'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
            ],
            reserved: false,
          },
          {
            id: 'starship',
            name: 'Starship',
            description: 'A fully reusable spacecraft designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond',
            flickr_images: [
              'https://live.staticflickr.com/65535/51344459842_4a4174d1cb_b.jpg',
            ],
            reserved: true,
          },
        ],
      },
    });

    store.dispatch = jest.fn();
  });

  test('should render the component', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.getByRole('heading', { name: 'Falcon 9' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Starship' })).toBeInTheDocument();
  });

  test('should dispatch getRockets action on mount', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(getRockets());
  });
});
