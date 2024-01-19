import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


function Header() {
  const navigate = useNavigate()
  return (
    <Navbar style={{height:'60px',overflowY:'hidden'}} expand="lg" className="navbar w-100 bg-light text-white">
    <Container>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
      <p className='fs-4 '>My Docs</p>
      </Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
      
        <Nav style={{margin:'-10px 0 0 1000px'}} className="nav  fs-5">
         <Nav.Link className='me-2' onClick={()=>navigate("/")} >Home</Nav.Link>
            <Nav.Link className='me-2' onClick={()=>navigate("/view")}>View</Nav.Link>
            <Nav.Link onClick={()=>navigate("/add")}>Add</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header