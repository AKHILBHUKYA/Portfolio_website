import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";

const LINKEDIN_URL = "https://linkedin.com/in/akhil-bhukya-a42422353";
const GITHUB_URL = "https://github.com/AKHILBHUKYA";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="brand-name">AKHIL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              ["home", "Home"],
              ["skills", "Skills"],
              ["projects", "Projects"],
              ["experience", "Experience"],
              ["education", "Education"],
            ].map(([id, label]) => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                className={activeLink === id ? "active navbar-link" : "navbar-link"}
                onClick={() => setActiveLink(id)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            </div>
            <HashLink to="#connect">
              <button className="vvd"><span>Let's Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
