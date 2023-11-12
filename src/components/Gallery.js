import {Card, Container, Col, Row, Image} from "react-bootstrap"
import team1Image from "../assets/image/baru/team1.jpg"
import kelasImage from "../assets/image/Galeri/Kelas.jpeg"
import jogjaImage from "../assets/image/baru/jogja.jpeg"

const Gallery = () => {
    return (
      <div>
        <Container>
            <br />
            <h1 className="teks-white">MY Gallery</h1>
            <br />
          <Row>
             <Col md={4} className="kuliah" id="gallery"> 
                <Card className="team1Image">
                  <Image src={team1Image} alt="FPMIPA" className="images"/>
                    <div className="bg-dark">
                        <div className ="p-2 m-1 text-white ">
                        <Card.Title className="text-center">TEAM WORK</Card.Title>
                        <Card.Text className="text-left">
          Teman terbaik di kampus
        </Card.Text>
        <Card.Text className="text-left">Last updated 1 mins ago
        </Card.Text>
        </div>
      </div>
    </Card>
  </Col>
  <Col md={4} className="kuliah"> 
                <Card className="kelasImage">
                  <Image src={kelasImage} alt="FPMIPA" className="images"/>
                    <div className="bg-dark">
                        <div className ="p-2 m-1 text-white ">
                        <Card.Title className="text-center">Kelas Promnet</Card.Title>
                        <Card.Text className="text-left">
          Selfie dulu sebelum kelas 
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago
        </Card.Text>
        </div>
      </div>
    </Card>
  </Col>
  <Col md={4} className="kuliah"> 
                <Card className="jogjaImage">
                  <Image src={jogjaImage} alt="FPMIPA" className="images"/>
                    <div className="bg-dark">
                        <div className ="p-2 m-1 text-white ">
                        <Card.Title className="text-center">MALIOBORO</Card.Title>
                        <Card.Text className="text-left">
          18 MEI 2023 
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago
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
export default Gallery