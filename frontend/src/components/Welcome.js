import React from 'react';
import { Jumbotron, Container,Button } from 'reactstrap';

const Welcome = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to Image gallery</h1>
          <p className="lead">This is the image gallery where you can search the images .</p>
          <Button>Read More</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Welcome;
