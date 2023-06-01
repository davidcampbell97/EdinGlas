
import './App.css';
import Navbar from './components/Navbar';
import home from './pages/home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<home/>}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
