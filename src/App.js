import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
