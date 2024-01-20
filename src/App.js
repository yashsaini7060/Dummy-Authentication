import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Profile from './components/Profile/Profile.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    // <Login />
  );
}

export default App;