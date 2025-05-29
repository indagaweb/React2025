import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header({ usuario, tipo }) {
  return (
    <Navbar bg="primary" variant="dark" className="px-3">
      <Navbar.Brand>React 2025</Navbar.Brand>
      <Navbar.Text className="ms-auto text-white">
        {tipo} - {usuario}
      </Navbar.Text>
    </Navbar>
  );
}

export default Header;