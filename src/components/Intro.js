import { Col, Container, Row, Button } from "react-bootstrap"

const Intro = () => {
    return (
      <section class="page-section" id="home">
        <div className="Intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
              <Row>
                <Col>
                <div className="title">ELLIORA</div>
                <div className="title">ORVA LINNISA</div>
                <div className="IntroButton mt-4 text-center">
                    <Button href="#about" variant="dark"> Lihat Biodata</Button>
                </div>
                </Col>
              </Row>
            </Container>
          </div>
          </section>
    )
}

export default Intro