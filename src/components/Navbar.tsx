// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import '../assets/styles/navbar.css';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

//   const handleLogin = () => {
//     setIsLoggedIn(true); // This should be set after successful login
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false); // This should be set after successful logout
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-title">MyPages</div>
//       <div className="navbar-search">
//         <input type="text" placeholder="Search" />
//         <button className="navbar-search-button">
//           <svg height="20" width="20" viewBox="0 0 20 20">
//             <path d="M12.9,11.7h-.8l-.3-.3a6.4,6.4,0,1,0-.6.6l.3.3v.8l5,5a1.3,1.3,0,1,0,1.8-1.8ZM8.2,12.9a4.7,4.7,0,1,1,4.7-4.7A4.7,4.7,0,0,1,8.2,12.9Z"></path>
//           </svg>
//         </button>
//       </div>
//       <ul className="navbar-links">
//         <li>
//           <NavLink
//             to="/write-post"
//             className={({ isActive }) => (isActive ? 'active' : undefined)}
//           >
//             Write
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/all-posts"
//             className={({ isActive }) => (isActive ? 'active' : undefined)}
//           >
//             All Posts
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) => (isActive ? 'active' : undefined)}
//           >
//             Contact
//           </NavLink>
//         </li>
//         {isLoggedIn ? (
//           <li className="dropdown">
//             <div className="profile-icon">
//               <svg height="40" width="40" viewBox="0 0 20 20">
//                 <circle cx="10" cy="10" r="10" fill="#007bff" />
//               </svg>
//             </div>
//             <div className="dropdown-content">
//               <button onClick={handleLogout}>Logout</button>
//             </div>
//           </li>
//         ) : (
//           <li>
//             <NavLink
//               to="/login"
//               className={({ isActive }) => (isActive ? 'active' : undefined)}
//             >
//               Login
//             </NavLink>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          MyPages
        </NavLink>
        <div className={`navbar-search ${isSearchActive ? "active" : ""}`}>
          <input type="text" placeholder="Search" />
          <button
            className="navbar-search-button"
            onClick={() => setIsSearchActive(!isSearchActive)}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
            </svg>
          </button>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/write-post"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Write
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-posts"
              className={({ isActive }) => (isActive ? "active" : "")}>
              All Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li className="navbar-profile">
              <button className="profile-button">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                  />
                </svg>
              </button>
              <div className="profile-dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
