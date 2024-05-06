import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BranchPage from './views/BranchPage';
import TimeoutPage from './components/TimeoutPage';
import DealProduct from './views/DealProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/branch' element={<BranchPage />} />
        <Route path='/time' element={<TimeoutPage />} />
        <Route path='/deal-product' element={<DealProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
