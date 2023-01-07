import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Coursework from './pages/coursework';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/coursework" element={<Coursework />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
      {/* <Avi src = {profPic} /> */}
    </div>
  );
}

export default App;
