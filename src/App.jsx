import './App.css';

import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0E11] text-white">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
