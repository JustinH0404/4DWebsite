import logo from './logo.svg';
import Home from './components/pages/home/home.js';
import Navbar from './components/inc/navbar';
import About from './components/pages/about/about.js';
import Services from './components/pages/services/services.js'
import Footer from './components/inc/footer';
import './App.css';
//edited by Tommy
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
