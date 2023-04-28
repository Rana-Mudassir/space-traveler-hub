import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Rocket from '../Components/rockets/Rocket';
import { reserveRocket } from '../features/rocketsSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Rocket', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const rocket = {
    id: 'rocket-id',
    name: 'Falcon 9',
    description: 'A reusable two-stage rocket...',
    image: 'https://www.example.com/rocket.jpg',
    reserved: false,
  };

  it('renders the rocket details', () => {
    const { getByText, getByAltText } = render(<Rocket
      id={rocket.id}
      name={rocket.name}
      description={rocket.description}
      image={rocket.image}
      reserved={rocket.reserved}
    />);
    expect(getByText('Falcon 9')).toBeInTheDocument();
    expect(getByText('A reusable two-stage rocket...')).toBeInTheDocument();
    expect(getByAltText('Falcon 9')).toBeInTheDocument();
  });

  it('renders a button to reserve the rocket', () => {
    const { getByText } = render(<Rocket
      id={rocket.id}
      name={rocket.name}
      description={rocket.description}
      image={rocket.image}
      reserved={rocket.reserved}
    />);
    const reserveButton = getByText('Reserve Rocket');
    expect(reserveButton).toBeInTheDocument();
  });

  it('renders a button to cancel the reservation if the rocket is already reserved', () => {
    const reservedRocket = { ...rocket, reserved: true };
    const { getByText } = render(<Rocket
      id={reservedRocket.id}
      name={reservedRocket.name}
      description={reservedRocket.description}
      image={reservedRocket.image}
      reserved={reservedRocket.reserved}
    />);
    const cancelButton = getByText('Cancel Reservation');
    expect(cancelButton).toBeInTheDocument();
  });

  it('dispatches reserveRocket action when the reserve button is clicked', () => {
    const { getByText } = render(<Rocket
      id={rocket.id}
      name={rocket.name}
      description={rocket.description}
      image={rocket.image}
      reserved={rocket.reserved}
    />);
    const reserveButton = getByText('Reserve Rocket');
    fireEvent.click(reserveButton);
    expect(dispatch).toHaveBeenCalledWith(reserveRocket('rocket-id'));
  });

  it('dispatches reserveRocket action when the cancel button is clicked', () => {
    const reservedRocket = { ...rocket, reserved: true };
    const { getByText } = render(<Rocket
      id={reservedRocket.id}
      name={reservedRocket.name}
      description={reservedRocket.description}
      image={reservedRocket.image}
      reserved={reservedRocket.reserved}
    />);
    const cancelButton = getByText('Cancel Reservation');
    fireEvent.click(cancelButton);
    expect(dispatch).toHaveBeenCalledWith(reserveRocket('rocket-id'));
  });
});
