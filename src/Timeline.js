import React from 'react';
import Moment from 'react-moment';

export const Timeline = ({ repos, following, followers, lastUpdate }) => {
  return (
    <div className='cards container'>
      {/* card */}
      <div className='card repos'>
        <span>
          <i className='fas fa-folder fa-2x' aria-hidden='true'></i>
        </span>
        <h3>Repository</h3>
        <p>{repos}</p>
      </div>
      {/* card */}
      <div className='card following'>
        <span>
          <i className='fas fa-users fa-2x' aria-hidden='true'></i>
        </span>
        <h3>Following</h3>
        <p>{following}</p>
      </div>
      {/* card */}
      <div className='card followers'>
        <span>
          <i className='fa fa-user-plus fa-2x' aria-hidden='true'></i>
        </span>
        <h3>Followers</h3>
        <p>{followers}</p>
      </div>
      {/* card */}
      <div className='card likes'>
        <span>
          <i className='fas fa-edit fa-2x' aria-hidden='true'></i>
        </span>
        <h3>Last Updated</h3>
        <p>
          <Moment date={lastUpdate} format='DD MMM Y' />
        </p>
      </div>
    </div>
  );
};
