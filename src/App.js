import './App.css';
import './reset.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { LandingPage } from './Components/LandingPage/LandingPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={<LandingPage/>} />
        </Routes>
      </Router>
      {/* <LandingPage/> */}
    </div>
  );
}

export default App;
