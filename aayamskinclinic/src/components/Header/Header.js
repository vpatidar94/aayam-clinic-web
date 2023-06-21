import { Link } from "react-router-dom"
import { React, useState } from 'react'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css";
import Offcanvas from 'react-bootstrap/Offcanvas';




const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsNavbarOpen(false);
  };


  return (
    <>

      <Navbar collapseOnSelect expand="md" className="my-nav1  top-section1" sticky="top" expanded={isNavbarOpen}>
        <Navbar.Brand href="/">
          <img src="./images/logo.jpg" alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-icon" onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
        <Navbar.Collapse id="basic-navbar-nav" className="collapse-bar justify-content-end">
          <Navbar.Offcanvas className="offcanvas-bg" show={isNavbarOpen}
            onHide={() => setIsNavbarOpen(false)}>
            <Offcanvas.Header closeButton className="bg-light" />
            <Offcanvas.Body className="nav-body">
              <Nav fill className="justify-content-end navbar-container me-auto ps-4">

                <Nav.Link onClick={handleNavItemClick}><Link to="/" className="nav-color options">HOME</Link></Nav.Link>
                <Nav.Link   onClick={handleNavItemClick}><Link to="/AboutUs" className="nav-color options">ABOUT US</Link></Nav.Link>
    
                <NavDropdown title={<span className="nav-color">TREATMENTS</span>} id="basic-nav-dropdown"
                 >
                  <NavDropdown.Item onClick={handleNavItemClick}>
                    <Link to="/SkinTreatment" className="sub-option">Skin Treatment</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleNavItemClick}>
                    <Link to="/CosmeticTreatment" className="sub-option">Cosmetic Treatment</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleNavItemClick}>
                    <Link to="/ProceduralTreatment" className="sub-option">Procedural </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleNavItemClick}>
                    <Link to="/DermatoSurgery" className="sub-option">Dermato Surgeries</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link  onClick={handleNavItemClick}><Link to="/Appointment" className="nav-color options">APPOINTMENT</Link></Nav.Link>
                <Nav.Link onClick={handleNavItemClick}><Link to="/Services" className="nav-color options">SERVICES</Link></Nav.Link>
                <NavDropdown title={<span className="nav-color">HEALTH TIPS</span>} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={handleNavItemClick}>
                    <Link to="/SkinTips" className="sub-option">Skin Tips</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleNavItemClick}>
                    <Link to="/HairTips" className="sub-option">Hair Tips</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleNavItemClick}>
                    <Link to="/NailsTips" className="sub-option">Nails Tips </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleNavItemClick}>
                    <Link to="/GeneralHealthTips" className="sub-option">General Tips</Link></NavDropdown.Item>
                <NavDropdown.Item onClick={handleNavItemClick}>
                    <Link to="/DentalTips" className="sub-option">Dental Tips</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link  onClick={handleNavItemClick}><Link to="/ContactUs" className="nav-color options">CONTACT</Link></Nav.Link>
                <Nav.Link href="/" className="nav-color" onClick={handleNavItemClick}>BLOG</Nav.Link>
              </Nav></Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar.Collapse>

      </Navbar>

    </>
  );

}


export default Header;
