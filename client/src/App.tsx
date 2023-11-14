import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import NavOutlet from './components/NavOutlet';
import ProfilePage from './pages/ProfilePge';
import ConfigPage from './pages/ConfigPage';
import WishlistPage from './pages/WishlistPage';
import CollectionPage from './pages/CollectionPage';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route path="/" element={<NavOutlet />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="/config/:type" element={<ConfigPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
