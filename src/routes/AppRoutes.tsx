import React from 'react';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import WritePostPage from '../pages/WritePostPage';
import AllPostsPage from '../pages/AllPostsPage';
import ContactPage from '../pages/ContactPage';
import ProfilePage from '../pages/ProfilePage';
import AuthPage from '../pages/Authpage';
import Navbar from '../components/Navbar';


// const AppRoutes = () => (
//   <Router>
//     {/* <Navbar /> */}
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/write-post" element={<WritePostPage />} />
//       <Route path="/all-posts" element={<AllPostsPage />} />
//       <Route path="/contact" element={<ContactPage />} />
//       <Route path="/profile" element={<ProfilePage />} />
//       <Route path="/auth" element={<AuthPage />} />
//     </Routes>
//   </Router>
// );

// export default AppRoutes;

// import React from 'react';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Home from './pages/Home';
// import WritePostPage from './pages/WritePostPage';
// import AllPostsPage from './pages/AllPostsPage';
// import ContactPage from './pages/ContactPage';
// import ProfilePage from './pages/ProfilePage';
// import AuthPage from './pages/Authpage';
// import Navbar from './components/Navbar';
import Footer from '../components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/write-post',
    element: (
      <>
        <Navbar />
        <WritePostPage />
        <Footer />
      </>
    ),
  },
  {
    path: '/all-posts',
    element: (
      <>
        <Navbar />
        <AllPostsPage />
        <Footer />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Navbar />
        <ContactPage />
        <Footer />
      </>
    ),
  },
  {
    path: '/profile',
    element: (
      <>
        <Navbar />
        <ProfilePage />
        <Footer />
      </>
    ),
  },
  {
    path: '/auth',
    element: (
      <>
        <Navbar />
        <AuthPage />
        <Footer />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <Navbar />
        <AuthPage />
        <Footer />
      </>
    ),
  }
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App;