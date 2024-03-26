// This is a component -- reusable block of code
/** skeleton of the component
  * component can have imports, 
  * must have a function which returns JSX
  * must have export
*/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import HomePage from './pages/HomePage/HomePage';
import NetflixPage from './pages/NetflixPage/NetflixPage';
import UsersPage from './pages/UsersPage/UsersPage';
import AboutPage from './pages/AboutPage/AboutPage';
import AddUser from './pages/UsersPage/AddUser';
import UserDetails from './pages/UsersPage/UserDetails';

const App: React.FC = () => {
  // App component is the ideal place for us to build the layout
  // returns JSX
  return (
    <BrowserRouter>
      <Header></Header>

      <main className="container mt-5 pt-2">
        {/* configure the routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/netflix" element={<NetflixPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/1" element={<UserDetails />} />
          <Route path="/about-us" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
