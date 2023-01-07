import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Avi from './components/avi.js';
import BigText from './components/bigText.js';
import profPic from './assets/alice_wu.jpeg';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
      {/* <Avi src = {profPic} /> */}
    </div>
  );
}

export default App;
