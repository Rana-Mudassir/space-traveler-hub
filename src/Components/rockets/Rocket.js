import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Rocket = ({
  id, name, description, image,
}) => (
  <div key={id}>
    <div>
      <span>Hello</span>
      <img src={image[0]} alt={name} />
    </div>
    <div>
      <h3 className="rocket-title">{name}</h3>
      <p>{description}</p>
      <Button variant="primary">Reserve Rocket</Button>
    </div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
