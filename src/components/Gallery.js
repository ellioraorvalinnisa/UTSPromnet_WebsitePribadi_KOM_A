import {Card, Container, Col, Row, Image} from "react-bootstrap"
import jogjaImage from "./../assets/image/baru/jogja.jpeg"
import prambananImage from "./../assets/image/baru/prambanan.jpeg"
import lavatourImage from "./../assets/image/bg/lavatour.jpeg"

const Gallery = () => {
    return (
      <div>
        <Container>
            <br />
            <h1 className="teks-white">My Gallery</h1>
            <br />
          <Row>
             <Col md={4} className="jogja" id="gallery"> 
                <Card className="jogjaImage">
                  <Image src={jogjaImage} alt="foto" className="images"/>
                    <div className="bg-dark">
                        <div className ="p-2 m-1 text-white ">
                        <Card.Title className="text-center">MALIOBORO</Card.Title>
                        <Card.Text className="text-left">
          18 MAY 2023
        </Card.Text>
        <Card.Text className="text-left">Last updated 1 mins ago
        </Card.Text>
        </div>
      </div>
    </Card>
  </Col>
  <Col md={4} className="jogja"> 
                <Card className="jogjaImage">
                  <Image src={prambananImage} alt="foto" className="images"/>
                    <div className="bg-dark">
                        <div className ="p-2 m-1 text-white ">
                        <Card.Title className="text-center">PRAMBANAN</Card.Title>
                        <Card.Text className="text-left">
          17 MAY 2023 
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago
        </Card.Text>
        </div>
      </div>
    </Card>
  </Col>
  <Col md={4} className="jogja"> 
                <Card className="jogjaImage">
                  <Image src={lavatourImage} alt="foto" className="images"/>
                    <div className="bg-dark">
                        <div className ="p-2 m-1 text-white ">
                        <Card.Title className="text-center">LAVA TOUR</Card.Title>
                        <Card.Text className="text-left">
          19 MEI 2023 
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