import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './lib/Home.jsx';
import SignIn from './lib/SignIn.jsx';
import SignUp from './lib/SignUp.jsx';
import Header from './lib/Header.jsx';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
