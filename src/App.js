import React, { useState, useEffect } from 'react';
import User from './User';
// import ICON_MOON from './images/icon-moon.svg';
// import ICON_SUN from './images/icon-sun.svg';
import ICON_SEARCH from './images/icon-search.svg';
import LOADER from './images/loader.gif';

function App() {
  const url = 'https://api.github.com/users/lukas';
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const defaultUser = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUser([data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    defaultUser();
  }, []);

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
  return (
    <main>
      <div>
        <header>
          <div className='container'>
            <h1>
              <a href='#'>DevPals</a>
            </h1>
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
