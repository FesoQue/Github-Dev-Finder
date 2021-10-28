import React, { useState, useEffect } from 'react';
import User from './User';
import ICON_SEARCH from './images/icon-search.svg';
import LOADER from './images/loader.gif';
import MORNING_ICON from './images/morning.png';
import AFTERNOON_ICON from './images/afternoon.png';
import EVENING_ICON from './images/night.png';
import NIGHT_ICON from './images/midnight.png';

function App() {
  const url = 'https://api.github.com/users/lukas';
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [morning, setMorning] = useState(false);
  const [afternoon, setAfternoon] = useState(false);
  const [evening, setEvening] = useState(false);
  const [workingLate, setWorkingLate] = useState(false);

  const getMessage = () => {
    const hrs = new Date().getHours();
    // morning
    if (hrs >= 0 && hrs < 12) {
      setMorning(true);
    }
    // afternoon
    if (hrs >= 12 && hrs < 18) {
      setAfternoon(true);
    }
    // evening
    if (hrs >= 18 && hrs < 22) {
      setEvening(true);
    }
    // working late
    if (hrs > 22) {
      setWorkingLate(true);
    }
  };

  const defaultUser = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUser([data]);
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
  };

  const handleName = (e) => {
    const nameValue = e.target.value;
    const newName = nameValue.split(' ').join('');
    setUserName(newName);
  };

  const fetchUser = async () => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    setUser([data]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName) {
      fetchUser();
      setUserName('');
      setError(false);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  useEffect(() => {
    defaultUser();
    getMessage();
  }, []);

  return (
    <main>
      <div>
        <header>
          <div className='d-flex container'>
            {/* logo */}
            <h1>
              <a href='#'>DevPadi</a>
            </h1>
            {/* message */}
            <div className='greetings'>
              {morning ? (
                <div>
                  <p>Good Morning,</p>
                  <img src={MORNING_ICON} alt='icon' />
                </div>
              ) : afternoon ? (
                <div>
                  <p>Good Morning,</p>
                  <img src={AFTERNOON_ICON} alt='icon' />
                </div>
              ) : evening ? (
                <div>
                  <p>Good Evening,</p>
                  <img src={EVENING_ICON} alt='icon' />
                </div>
              ) : workingLate ? (
                <div>
                  <p>Night Crawler</p>
                  <img src={NIGHT_ICON} alt='icon' />
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </header>
        <form id='form' onSubmit={handleSubmit}>
          <div className='container'>
            <div className={error ? 'form-group error' : 'form-group'}>
              <input
                type='text'
                value={userName}
                onChange={handleName}
                placeholder='Search Github Username'
              />
              <button type='submit' className='submit-btn'>
                <img src={ICON_SEARCH} alt='search_icon' />
              </button>
            </div>
          </div>
          {error && (
            <div className='err-msg'>
              <p>Ayee boss!! Name cannot be blank</p>
            </div>
          )}
        </form>
        {loading ? (
          <div className='loading'>
            <img src={LOADER} alt='loading' />
          </div>
        ) : (
          <article className='user-profile'>
            <div className='user'>
              {user.map((person, index) => {
                return <User key={index} {...person} />;
              })}
            </div>
          </article>
        )}
      </div>
      <footer className='container'>
        <p>
          Made with 💝 and 🍵 by{' '}
          <a href='https://www.github.com/FesoQue'>Q. Adebola</a>{' '}
        </p>
      </footer>
    </main>
  );
}

export default App;
