import React from 'react';
import ProductCard from './ProductCard';

import { Container, Row, Col, Card } from 'react-bootstrap';

function Gallery({ productos }) {
  return (
    <Container>
      <h2>Galería</h2>
      <Row>
        {productos.map((productos) => (
          <Col md={4} key={productos.id} className="mb-4">
            <Card>
              
              <Card.Body>
              
                <ProductCard 
                  image={productos.image}
                  description={productos.description}
                  title= {" Precio $ "+ productos.price}/>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;