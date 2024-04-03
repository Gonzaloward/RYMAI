import { CardText } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { link } from "react-router-dom"

export const Item = ({ product }) => (
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product,name}</Card.Title>
        <Card.Text>{product.detaill}</Card.Text>
        <CardText>{product.category}</CardText>
        <link to={'/item/${product.id}'}><Button variant="primary">Go somewhere</Button>
        </link>
      </Card.Body>
    </Card>
);



