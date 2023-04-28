import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Profile from '../Components/Profile';

const mockStore = configureMockStore([thunk]);
describe('Profile component', () => {
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
      mission: {
        missions: [
          { mission_id: 1, mission_name: 'Mission 1', reserved: true },
          { mission_id: 2, mission_name: 'Mission 2', reserved: false },
        ],
      },
    });
  });

  it('renders the reserved missions and rockets', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    const reservedMissions = screen.getAllByText('Mission 1');
    const reservedRockets = screen.getAllByText('Starship');

    expect(reservedMissions.length).toBe(1);
    expect(reservedMissions[0]).toHaveTextContent('Mission 1');
    expect(reservedRockets.length).toBe(1);
    expect(reservedRockets[0]).toHaveTextContent('Starship');
  });
});
