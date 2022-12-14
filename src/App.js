import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <p className='d-none'>a72432c97e0d491bb69cf1645c54f9e0</p>
      <Navbar />
      <Routes>
        <Route path='/' element={<News key="general" category="general" pageSize={9} />} />
        <Route path='/business' element={<News key="business" category="business" pageSize={9} />} />
        <Route path='/entertainment' element={<News key="entertainment" category="entertainment" pageSize={9} />} />
        <Route path='/health' element={<News key="health" category="health" pageSize={9} />} />
        <Route path='/science' element={<News key="science" category="science" pageSize={9} />} />
        <Route path='/sports' element={<News key="sports" category="sports" pageSize={9} />} />
        <Route path='/technology' element={<News key="technology" category="technology" pageSize={9} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
