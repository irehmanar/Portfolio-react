import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
      <Contact/>
      <Footer/>
      // Ustaad
    </div>
  );
}

export default App;
