import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Portofolio from './components/Portofolio';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className='myBG'>
         <NavigationBar />
         <Home />
      </div>

      <div className='about'>
        <About/>
      </div>

      <div className="contact"> 
        <Contact/>
      </div>

      <div className="services">
          <Services/>
       </div>

      <div>
        <Portofolio />
        </div>

      <div className='gallery'>
        <Gallery/>
      </div>

      <div className='footer'>
        <Footer/>
      </div>

    </div>
            );
        }

export default App;
