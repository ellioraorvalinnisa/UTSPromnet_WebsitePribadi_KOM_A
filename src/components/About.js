import { Card, Container } from "react-bootstrap"

const About = () => {
  return (
    <section class="page-section" id="about">
    <div>
      <Container>
        <br />
        <h1 className="teks-white">ABOUT ME</h1>
        <br />
        <Card>
          <Card.Title className="text-left">Hello,</Card.Title>
          <Card.Text className="text-left">
            Perkenalkan aku Ell, lahir di Bandung, 25 Juli 2002. Saat ini aku
            merupakan mahasiswa tingkat I jurusan Pendidikan Ilmu Komputer,
            Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam Sedang
            mengejar gelar S1 di Universitas Pendidikan Indonesia.
          </Card.Text>
        </Card>
      </Container>
    </div>
    </section>
  )
}

export default About
