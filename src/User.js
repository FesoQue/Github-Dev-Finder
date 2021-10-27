import React from 'react';
import { useState } from 'react';
import { Timeline } from './Timeline';
import { About } from './About';

const User = ({
  avatar_url,
  login,
  name,
  bio,
  created_at,
  public_repos,
  followers,
  following,
  location,
  twitter_username,
  updated_at,
  html_url,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [overview, setOverview] = useState('timeline');

  const handleClick = (str) => {
    switch (str) {
      case 'timeline':
        setIsActive(true);
        setOverview('timeline');
        break;
      case 'about':
        setIsActive(true);
        setOverview('about');
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className='basic-info'>
        <div className='container'>
          <img src={avatar_url} alt='person' className='avatar' />
          <div className='info'>
            <p className='name'>{name}</p>
            <p>
              <a href={html_url}>🔗 @{login}</a>
            </p>
            <p>{bio}</p>
          </div>
          {/* button */}
          <div className='btn-container'>
            <button
              className={overview === 'timeline' ? 'btn active' : 'btn'}
              onClick={() => handleClick('timeline')}
              disabled={overview === 'timeline' && isActive}
            >
              <i className='far fa-eye'></i> Timeline
            </button>
            <button
              className={overview === 'about' ? 'btn active' : 'btn'}
              onClick={() => handleClick('about')}
              disabled={overview === 'about' && isActive}
            >
              <i className='fas fa-user'></i> About
            </button>
          </div>
        </div>
      </div>
      {/* overview */}
      <div className={overview === 'timeline' ? 'overview active' : 'overview'}>
        <Timeline
          repos={public_repos}
          followers={followers}
          following={following}
          lastUpdate={updated_at}
        />
      </div>
      <div className={overview === 'about' ? 'overview active' : 'overview'}>
        <About
          location={location}
          twitter={twitter_username}
          update={updated_at}
          created={created_at}
        />
      </div>
    </>
  );
};

export default User;
