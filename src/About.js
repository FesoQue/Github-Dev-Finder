import React from 'react';
import Moment from 'react-moment';

export const About = ({ location, twitter, update, created }) => {
  return (
    <div className='about container'>
      {/* location */}
      <div className='desc location'>
        <span>
          <i className='fas fa-map-marker-alt fa-2x' aria-hidden='true'></i>
        </span>
        <div>{location ? location : 'Not Available'}</div>
      </div>
      {/* twitter */}
      <div className='desc twitter'>
        <span>
          <i className='fab fa-twitter fa-2x' aria-hidden='true'></i>
        </span>
        <div>{twitter ? twitter : 'Not Available'}</div>
      </div>
      {/* register date */}
      <div className='desc created'>
        <span>
          <i className='far fa-calendar-alt fa-2x' aria-hidden='true'></i>
        </span>
        <div>
          <p>
           Joined <Moment date={created} format='DD MMM Y' />
          </p>
        </div>
      </div>
    </div>
  );
};
