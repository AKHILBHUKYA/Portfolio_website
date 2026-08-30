import { Container, Row, Col } from "react-bootstrap";
import { Github, Linkedin, Envelope } from "react-bootstrap-icons";

export const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col size={12} sm={6}>
          <div className="footer-brand">BHUKYA AKHIL</div>
          <p>Software Development Engineer – Backend</p>
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="mailto:akhilbhukya16@gmail.com" aria-label="Email"><Envelope /></a>
            <a href="https://linkedin.com/in/akhil-bhukya-a42422353" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://github.com/AKHILBHUKYA" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          </div>
          <p>© {new Date().getFullYear()} Bhukya Akhil. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);
