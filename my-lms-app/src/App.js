import './App.css';
import Homepage from './Homepage.js';
import CoursesPage from './CoursesPage.js';
import Login from './Login.js';
import SignupPage from './SignupPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<CoursesPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
