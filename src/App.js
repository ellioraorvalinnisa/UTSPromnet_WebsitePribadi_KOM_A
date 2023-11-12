import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import "./style/landingPage.css"
import Portofolio from "./components/Portofolio"

function App() {
  return (
    <div>
        <div className="myBG">
          <NavigationBar />
          <Intro/>
        </div>

            <div className="About">
            <About/>
            </div>

            <div className="Contact">
            <Contact/>
            </div>

           <div className="Services">
            <Services/>
            </div>

            <div className="Portofolio">
            <Portofolio/>
           </div>

            <div className="Gallery">
            <Gallery/>
           </div>

             <div className="Footer">
             <Footer/>
           </div>
  
            </div>
  
  )
}

export default App
