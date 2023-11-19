import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from './components/Base';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Privateroute from './components/Privateroute';
import Userdashboard from './pages/user-routes/Userdashboard';
import SinglePost from './pages/SinglePost';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position='bottom-center' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/user" element={<Privateroute />} >
          <Route path='userdashboard' element={<Userdashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
