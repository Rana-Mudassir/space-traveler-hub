import React from 'react';
import '../Assets/css/profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((store) => store.rocket.rockets);
  const missions = useSelector((store) => store.mission.missions);
  return (
    <section>
      <hr />
      <div className="profile-wrapper">
        <div className="missions">
          <h4>My Missions</h4>
          <ul>
            {missions.filter((mission) => mission.reserved)
              .map((mission) => (
                <li key={mission.mission_id}>{mission.mission_name}</li>
              ))}
          </ul>
        </div>
        <div className="rockets">
          <h4>My Rockets</h4>
          <ul>
            {
                            rockets
                              .filter((rocket) => rocket.reserved)
                              .map((rocket) => (
                                <li key={rocket.id}>{rocket.name}</li>
                              ))
                        }
          </ul>
        </div>
      </div>
    </section>

  );
};

export default Profile;
