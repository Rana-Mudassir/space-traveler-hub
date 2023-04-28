import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission, leaveMission } from '../../features/missionsSlice';

function Missions({
  title, description, reserved, id,
}) {
  const dispatch = useDispatch();

  const resMission = () => {
    dispatch(reserveMission(id));
  };

  const levMission = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tr>
      <td className="title-name">{title}</td>
      <td className="desc-name">{description}</td>
      {reserved ? (
        <>
          <td className="status"><span className="status-active">Active Member</span></td>
          <td>
            <button type="button" className="reserve-button-leave" onClick={levMission}>Leave Mission</button>
          </td>
        </>
      ) : (
        <>
          <td className="status"><span className="status-inactive">Not a Member</span></td>
          <td>
            <button type="button" className="reserve-button" onClick={resMission}>Join Mission</button>
          </td>
        </>
      )}
    </tr>
  );
}

Missions.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Missions;
