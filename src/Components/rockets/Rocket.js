import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../../features/rocketsSlice';

const Rocket = ({
  id, name, description, image, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <div key={id} className="rocket-wrapper d-flex me-2 mb-4">
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h3 className="rocket-title">{name}</h3>
        <p>{description}</p>
        {reserved ? (
          <Button
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              dispatch(cancelReservation(id));
            }}
          >
            Cancel Reservation
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              dispatch(reserveRocket(id));
            }}
          >
            Reserve Rocket
          </Button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
