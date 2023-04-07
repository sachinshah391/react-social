
import './App.css';
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile/:username' element={<Profile/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
