import {Card, Button} from 'react-bootstrap';
import bg2Image from './../assets/image/bg/bg2.jpeg'

const Home =()=>{
    
    return (
            <Card className="bg-dark text-white">
            <Card.Img src= {bg2Image} alt="myPhotos" className="myPhotos"/>
            <Card.ImgOverlay>
                <h1>Welcome to My Website!</h1>
                <Card.Title>Elliora Orva Linnisa</Card.Title>
                <Card.Text>
                Computer Science Education Students
                </Card.Text>
                <Button variant="success" href="#about">Go somewhere</Button>
            </Card.ImgOverlay>
            </Card>
  );
}

export default Home;
