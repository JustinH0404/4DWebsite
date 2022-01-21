import logo from './logo.svg';
import Home from './components/pages/home/home.js';
import Navbar from './components/inc/navbar';
import About from './components/pages/about/about.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
