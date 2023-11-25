import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from './components/Base';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutPage from './pages/AboutPage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Privateroute from './components/Privateroute';
import Userdashboard from './pages/user-routes/Userdashboard';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position='bottom-center' />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/post/:postId" element={<BlogPage />} />
        <Route path="/user" element={<Privateroute />} >
          <Route path='userdashboard' element={<Userdashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
