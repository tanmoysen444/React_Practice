import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import authToken from './authToken/authToken'
function AppBar() {
  let tokenCredentials = authToken()
  let navigate = useNavigate()
  let logout = () => {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Techno Revolver</Navbar.Brand>
          {tokenCredentials && tokenCredentials.token && tokenCredentials.role === "admin" && <Nav className="me-auto">
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/addProduct">Add Products</Nav.Link>
          </Nav>}
          {!tokenCredentials ? (<Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>) : (
            <Button onClick={logout}>Logout</Button>
          )}
        </Container>
      </Navbar>
    </div>
  )
}

export default AppBar