import {Card, Container, Col, Row, Image} from "react-bootstrap"
import kemakomImage from "../assets/image/Galeri/Kemakom.jpeg"
import industrialImage from "../assets/image/Galeri/Industrial.jpeg"
import podcastImage from "../assets/image/baru/podcast.png"

const Portofolio = () => {
    return (
      <div>
        <Container>
            <br />
            <h1 className="teks-white">Welcome to My Portofolio</h1>
            <br />
          <Row>
             <Col md={4} className="divkomJuara" id="portofolio"> 
                <Card className="divkomImage">
                  <Image src={kemakomImage} alt="Divkom" className="images"/>
                    <div className="bg-dark">
                        <div className ="p-2 m-1 text-white ">
                        <Card.Title className="text-center">DIVKOMTEKINFO</Card.Title>
                        <Card.Text className="text-left">
          Divkomtekinfo merupakan salah satu divisi BEM Kemakom, FPMIPA, UPI 
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago
        </Card.Text>
        </div>
      </div>
    </Card>
  </Col>
  <Col md={4} className="divkomJuara"> 
                <Card className="industrialImage">
                  <Image src={industrialImage} alt="Divkom" className="images"/>
                    <div className="bg-dark">
                        <div className ="p-2 m-1 text-white ">
                        <Card.Title className="text-center">Invit</Card.Title>
                        <Card.Text className="text-left">
          Merupakan salah satu program kerja dari divisi Divkom, yang mana kita berkunjung ke suatu industri 
        </Card.Text>
        <Card.Text className="text-left">Last updated 1 mins ago
        </Card.Text>
        </div>
      </div>
    </Card>
  </Col>
  <Col md={4} className="DdivkomJuara"> 
                <Card className="podcastImage">
                  <Image src={podcastImage} alt="Divkom" className="images"/>
                    <div className="bg-dark">
                        <div className ="p-2 m-1 text-white ">
                        <Card.Title className="text-center">Komcast</Card.Title>
                        <Card.Text className="text-left">
            Merupakan suatu program kerja dari divisi Divkom, dan Alhamdulillah saya diAmanahi menjadi Ketua Pelaksana
        </Card.Text>
        <Card.Text className="text-left">Last updated 2 mins ago
        </Card.Text>
        </div>
      </div>
    </Card>
  </Col>
  </Row>
 </Container>
    </div>
  )
}
export default Portofolio