import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import './styles/globals.scss';
import SearchCardPage from './pages/SearchCardPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/search-card' element={<SearchCardPage />} />
      <Route path='*' element={<Homepage />} />
    </Routes>
  );
}

export default App;
