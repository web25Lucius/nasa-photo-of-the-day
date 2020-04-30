import React from "react";
import { Card, CardBody, CardTitle, CardText, Container} from 'reactstrap';



const InfoCard = (props) => {
  
        return (
          <div className="infoCard">
            <Card>
            <Container className="themed-container" fluid="xl">
              <img top width="80%" src={props.src} alt={props.title} />
            <CardBody>
            <CardTitle> {`Nasa photo du jur: ${props.title}`} </CardTitle>
            <CardText> {`Photo of the Day on ${props.date}`} </CardText>
            <CardText> <p>Description: {props.explanation} </p></CardText>
            </CardBody>
            </Container>
            </Card>
        </div>
    )
}

export default InfoCard; 
