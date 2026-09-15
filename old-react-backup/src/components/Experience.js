import { Container, Row, Col } from "react-bootstrap";

export const Experience = () => (
  <section className="info-section" id="experience">
    <Container>
      <Row>
        <Col size={12}>
          <h2>Professional Experience</h2>
          <div className="info-card">
            <div className="info-card-header">
              <h3>Frontend Developer Intern</h3>
              <span>Aug 2024 – Nov 2024</span>
            </div>
            <h4>Vaishnavi Technologies Pvt. Ltd., Hyderabad</h4>
            <ul>
              <li>Worked on features for a customer-facing web application using HTML, CSS and JavaScript.</li>
              <li>Worked closely with the backend team on REST API integration and checked API responses.</li>
              <li>Traced UI and API data-flow issues, fixed defects and verified fixes through development and testing.</li>
              <li>Used Git and GitHub while working across development, testing and release cycles.</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);
