import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../features/rocketsSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((store) => store.rocket.rockets);
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <section className="rocket-wrapper">
      <header className="header" />
      <hr />
      <h2>Rockets</h2>
      <div className="rockets">
        {
          rockets?.map((rocket) => (
            <Rocket
              key={rocket.id}
              id={rocket.id}
              name={rocket.name}
              description={rocket.description}
              image={rocket.flickr_images}
            />
          ))
        }
      </div>
    </section>

  );
};
export default Rockets;
