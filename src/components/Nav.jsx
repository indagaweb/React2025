import React from 'react';
import { Nav as BootstrapNav, Navbar, Container } from 'react-bootstrap';

function Nav({ items, onSeleccion }) {
  return (
    <Navbar  bg="secondary" text="white" expand="md">
      <Container>
        <BootstrapNav className="me-auto text-white">
          {items.map((item) => (
            <BootstrapNav.Link key={item} onClick={() => onSeleccion(item)}>
              {item}
            </BootstrapNav.Link>
          ))}
        </BootstrapNav>
      </Container>
    </Navbar>
  );
}

export default Nav;