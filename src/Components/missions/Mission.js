import React from 'react';
import PropTypes from 'prop-types';

function Missions({
  title, description,
}) {
  return (
    <tr>
      <td className="title-name">{title}</td>
      <td className="desc-name">{description}</td>
      <td>Joined Mission</td>
      <td>
        <button type="button">Join Mission</button>
      </td>
    </tr>
  );
}

Missions.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Missions;
