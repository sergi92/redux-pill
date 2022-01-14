import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
