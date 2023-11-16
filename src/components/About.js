import Card from 'react-bootstrap/Card';

function About() {
  return (
    <section class="page-section" id="about">
    <div>
    <Card bg="dark" data-bs-theme="dark">
      <h2>ABOUT ME</h2>
      <Card.Header>Halo!!</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Perkenalkan aku Ell, lahir di Bandung, 25 Juli 2002. 
            Saat ini aku merupakan mahasiswa tingkat I jurusan Pendidikan Ilmu Komputer, 
            Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam Sedang mengejar 
            gelar S1 di Universitas Pendidikan Indonesia.
            {' '}
          </p>
          <footer className="blockquote-footer">
            Bandung, <cite title="Source Title">4 November 2023</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
    </section>
  );
}

export default About;