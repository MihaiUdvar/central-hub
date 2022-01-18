import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import NavbarComp from './components/Navbar';
import Bookmarks from './components/pages/Bookmarks';
import Notes from './components/pages/Notes';
import Lists from './components/pages/Lists';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/lists" element={<Lists />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
