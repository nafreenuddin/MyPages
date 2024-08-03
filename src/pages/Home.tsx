import React, { useState } from 'react';
import Header from '../components/Header';
import './Home.css'; // Make sure to create and import the CSS file for styling

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('Nafreenuddin'); // Example username

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} username={username} />

      <section className="main-features">
        <h2>Main Features</h2>
        <div className="features-container">
          <div className="feature">
            <div className="feature-icon">
              <svg height="60" width="60" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" fill="#007bff" />
              </svg>
            </div>
            <h3>Heading</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <svg height="60" width="60" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" fill="#007bff" />
              </svg>
            </div>
            <h3>Heading</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <svg height="60" width="60" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" fill="#007bff" />
              </svg>
            </div>
            <h3>last Heading</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
