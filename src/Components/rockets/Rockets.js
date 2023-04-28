import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../features/rocketsSlice';
import Rocket from './Rocket';
import '../../Assets/css/rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((store) => store.rocket);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rockets]);

  return (
    <section>
      <hr />
      <div className="rockets">
        {
          rockets?.map((rocket) => (
            <Rocket
              key={rocket.id}
              id={rocket.id}
              name={rocket.name}
              description={rocket.description}
              image={rocket.flickr_images[0]}
              reserved={rocket.reserved}
            />
          ))
        }
      </div>
    </section>

  );
};
export default Rockets;
