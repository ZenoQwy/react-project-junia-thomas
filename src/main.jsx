import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './index.css';

import Layout from './lib/Layout.jsx';
import Home from './lib/Home.jsx';
import SignIn from './lib/SignIn.jsx';
import SignUp from './lib/SignUp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />

          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
