import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/login';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  {/* ✅ Add this */}
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
   
  );
}

export default App;
