import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import Home from './lib/Home.jsx';
import SignIn from './lib/SignIn.jsx';
import SignUp from './lib/SignUp.jsx';
import Layout from './lib/Layout.jsx';
import { AuthProvider } from './services/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
