import { Carousel } from "react-bootstrap";
import divkomImage from './../assets/image/baru/divkom.jpeg'
import jakartadivkomImage from './../assets/image/baru/jakartadivkom.jpeg'
import podcastImage from './../assets/image/baru/podcast.png'
import kelazImage from './../assets/image/baru/kelaz.jpeg'

const Portofolio = () => {
  return (
    <section class="page-section" id="portofolio">
    <Carousel>
    <Carousel.Item>
      <img 
      className="d-block w-100" 
      src ={divkomImage}
      alt = "first slide"
      />
      <Carousel.Caption>
        <h3>DIVKOMTEKINFO</h3>
        <p>merupakan salah satu divisi BEM Kemakom FPMIPA UPI.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img 
      className="d-block w-100" 
      src ={jakartadivkomImage}
      alt = "second slide"
      />
      <Carousel.Caption>
        <h3>Industrial Visit</h3>
        <p>Merupakan salah satu program kerja dari divisi Divkom, yang mana kita berkunjung ke suatu industri.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img 
      className="d-block w-100" 
      src ={podcastImage}
      alt = "third slide"
      />
      <Carousel.Caption>
        <h3>Podcast Kemakom</h3>
        <p>Merupakan suatu program kerja dari divisi Komtekinfo, dan Alhamdulillah saya di Amanahi menjadi Ketua Pelaksana.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img 
      className="d-block w-100" 
      src ={kelazImage}
      alt = "fourth slide"
      />
      <Carousel.Caption>
        <h3>PILKOM A</h3>
        <p>FPMIPA-UPI</p>
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel>
  </section>
  )
}

export default Portofolio;