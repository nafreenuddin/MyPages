// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../assets/styles/Header.css';

// function Header ({ isLoggedIn, username }: { isLoggedIn: boolean, username: string }) {
//   const navigate = useNavigate();

//   const handleStart = () => {
//     navigate('/write-post');
//   };

//   return (
//     <header className="header">
//       <div className="header-content">
//         <div className="header-text">
//           <h1>{isLoggedIn ? `Welcome, ${username}` : 'Welcome to Pages'}</h1>
//           <h2>Unleash Your Thoughts, Share Your Story</h2>
//           <p>
//             MyPages is your personal canvas for expressing ideas, sharing experiences, and connecting with like-minded individuals.
//             Whether you're a seasoned writer or just starting your journey, our platform provides the perfect space to create, grow, and inspire.
//           </p>
//           <button onClick={handleStart}>Start</button>
//         </div>
//         <div className="header-image">
//           <img src="your-image-url" alt="Header Illustration" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';

// interface HeaderProps {
//   isLoggedIn: boolean;
//   username?: string;
// }

// const Header: React.FC<HeaderProps> = ({ isLoggedIn, username }) => {
//   return (
//     <>
//     This is also header!
//     </>
//   );
// };

// export default Header;

// import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Header.css';
import headerImage from './ai.jpg';

const Header = ({ isLoggedIn, username }: { isLoggedIn: boolean, username: string }) => {
    const navigate = useNavigate();
  
    const handleStart = () => {
      navigate('/write-post');
    };
  
    return (
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1>{isLoggedIn ? `Welcome, ${username}` : 'Welcome to Pages'}</h1>
            <h2>Unleash Your Thoughts, Share Your Story</h2>
            <p>
              MyPages is your personal canvas for expressing ideas, sharing experiences, and connecting with like-minded individuals.
              Whether you're a seasoned writer or just starting your journey, our platform provides the perfect space to create, grow, and inspire.
            </p>
            <button className="start-button" onClick={handleStart}>Start</button>
          </div>
          <div className="header-image">
          <img src={headerImage} alt="Header Illustration" />
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;

