import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import View from './Components/View';
import Rockets from './Components/Rockets';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
    </>
  );
}

export default App;
