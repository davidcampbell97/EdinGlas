
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Footer from "./components/Footer"
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/Fleet" element = {<Fleet/>}/>
          <Route path="/About" element = {<About/>}/>
          <Route path="/Contact" element = {<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
      </div>
  );
}

export default App;
