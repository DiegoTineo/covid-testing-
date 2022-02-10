import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Image, Button, Container, Navbar, Nav } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Routes } from "../routes";
import ThemesbergLogo from "../assets/img/themesberg-logo.svg";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";

export default () => {

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };


  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <Image src={ReactHero} />
            <span className="ms-2 brand-text d-none d-md-inline">Covid Testing</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#team">Equipo</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button variant="outline-white" as={Link} to={Routes.Seguimiento.path} className="ms-3">Dashboard <FontAwesomeIcon icon={faExternalLinkAlt} className="me-1" />
            </Button>
          </div>
        </Container>
      </Navbar>


      <section className="section overflow-hidden pt-5 pt-lg-6 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div>
              <h1 className="fw-bolder text-secondary">Covid Testing</h1>
              <p className="text-muted fw-light mb-5 h5">
                Covid testing es el microservicio relacionado al control de pruebas de vacunacion. Pruebe nuestro Dashboard
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="secondary" as={Link} to={Routes.Seguimiento.path} className="text-dark me-3">
                  Dashboard<FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*Team*/}
      <section className="section section-lg bg-white text-dark" id="team">

        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">Equipo Azul</h2>
            </Col>
          </Row>
          <Row>
            <Feature title="Diego Tineo" description="27.650.623" />
            <Feature title="Miguel Bruno" description="26.842.695" />
            <Feature title="Daniel Silva" description="27.424.058" />
            <Feature title="Wilmer Pulgar" description="26.625.191" />
          </Row>
        </Container>
      </section>

      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={12}>
              <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                <Image src={ReactHero} />
                <span className="ms-2 brand-text">Acerca de Covid-Testing</span>
              </Navbar.Brand>
              <p>Covid testing forma parte de un grupo de microservicios relacionados al Covid-19 y que fueron desarrollados con fines academicos para la asignatura de Sistemas de Informacion II</p>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <Card.Link href="https://themesberg.com" target="_blank" className="d-flex justify-content-center">
                <Image src={ThemesbergLogo} height={35} className="d-block mx-auto mb-3" alt="Themesberg Logo" />
              </Card.Link>
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © Themesberg 2019-<span className="current-year">2021</span>. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
