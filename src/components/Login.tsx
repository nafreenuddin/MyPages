// import React, { useState } from 'react';
// import axios from 'axios';
// import '../assets/styles/Login.css';

// const Login = () => {
//   const [step, setStep] = useState(1);
//   const [emailOrMobile, setEmailOrMobile] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleEmailOrMobileSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/check-user', { emailOrMobile });
//       if (response.data.exists) {
//         setStep(2);
//       } else {
//         setStep(3); // Move to registration step
//       }
//     } catch (err) {
//       setError('An error occurred');
//     }
//   };

//   const handleLoginSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/login', { emailOrMobile, password });
//       // Handle successful login
//       console.log('Login successful', response.data);
//     } catch (err) {
//       setError('Incorrect password');
//     }
//   };

//   const handleRegisterSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/register', { username, email, mobileNumber, password });
//       // Handle successful registration
//       console.log('Registration successful', response.data);
//     } catch (err) {
//       setError('Registration failed');
//     }
//   };

//   return (
//     <div className="login">
//       <div className="login__container">
//         {step === 1 && <h1 className="login__title">{emailOrMobile ? 'Welcome Back' : 'Welcome to Pages'}</h1>}
//         <h2 className="login__subtitle">{step === 3 ? 'Create Your Account' : 'Sign In'}</h2>
//         {error && <p className="login__error">{error}</p>}
//         {step === 1 && (
//           <form className="login__form" onSubmit={handleEmailOrMobileSubmit}>
//             <input
//               className="login__input"
//               type="text"
//               placeholder="Email or Mobile Number"
//               value={emailOrMobile}
//               onChange={(e) => setEmailOrMobile(e.target.value)}
//               required
//             />
//             <button className="login__button" type="submit">Next</button>
//           </form>
//         )}
//         {step === 2 && (
//           <form className="login__form" onSubmit={handleLoginSubmit}>
//             <input
//               className="login__input"
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button className="login__button" type="submit">Sign In</button>
//           </form>
//         )}
//         {step === 3 && (
//           <form className="login__form" onSubmit={handleRegisterSubmit}>
//             <input
//               className="login__input"
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <input
//               className="login__input"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               className="login__input"
//               type="tel"
//               placeholder="Mobile Number"
//               value={mobileNumber}
//               onChange={(e) => setMobileNumber(e.target.value)}
//               required
//             />
//             <input
//               className="login__input"
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button className="login__button" type="submit">Create Account</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import '../assets/styles/Login.css';

const Login = () => {
  const [step, setStep] = useState(1);
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    // Load users from local storage on component mount
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const simulateApiCall = (success: boolean, data: any, delay: number = 1000) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve(data);
        } else {
          reject(new Error('API call failed'));
        }
      }, delay);
    });
  };

  const handleEmailOrMobileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const userExists = users.some(user => user.email === emailOrMobile || user.mobileNumber === emailOrMobile);
      await simulateApiCall(true, { exists: userExists });
      if (userExists) {
        setStep(2);
      } else {
        setStep(3);
      }
    } catch (err) {
      setError('An error occurred');
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const user = users.find(user => (user.email === emailOrMobile || user.mobileNumber === emailOrMobile) && user.password === password);
      await simulateApiCall(true, { success: !!user });
      if (user) {
        console.log('Login successful', user);
        // Here you would typically set the user in your app's state or context
      } else {
        setError('Incorrect email/mobile or password');
      }
    } catch (err) {
      setError('An error occurred');
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      if (users.some(user => user.email === email || user.mobileNumber === mobileNumber)) {
        setError('User with this email or mobile number already exists');
        return;
      }
      const newUser = { username, email, mobileNumber, password };
      await simulateApiCall(true, { success: true });
      setUsers(prevUsers => {
        const updatedUsers = [...prevUsers, newUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        return updatedUsers;
      });
      console.log('Registration successful', newUser);
      // Here you would typically set the user in your app's state or context
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        {step === 1 && <h1 className="login__title">{emailOrMobile ? 'Welcome Back' : 'Welcome to Pages'}</h1>}
        <h2 className="login__subtitle">{step === 3 ? 'Create Your Account' : 'Sign In'}</h2>
        {error && <p className="login__error">{error}</p>}
        {step === 1 && (
          <form className="login__form" onSubmit={handleEmailOrMobileSubmit}>
            <input
              className="login__input"
              type="text"
              placeholder="Email or Mobile Number"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
              required
            />
            <button className="login__button" type="submit">Next</button>
          </form>
        )}
        {step === 2 && (
          <form className="login__form" onSubmit={handleLoginSubmit}>
            <input
              className="login__input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="login__button" type="submit">Sign In</button>
          </form>
        )}
        {step === 3 && (
          <form className="login__form" onSubmit={handleRegisterSubmit}>
            <input
              className="login__input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className="login__input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="login__input"
              type="tel"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
            <input
              className="login__input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="login__button" type="submit">Create Account</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;