import { Container, Row, Col } from "react-bootstrap";

export const Education = () => (
  <section className="info-section education-section" id="education">
    <Container>
      <Row>
        <Col size={12}>
          <h2>Education & Certifications</h2>
          <div className="education-grid">
            <div className="info-card">
              <h3>Bachelor of Technology — Computer Science and Engineering</h3>
              <h4>Malla Reddy Institute of Technology, Hyderabad</h4>
              <p>2022 – 2026 · CGPA: 8.08 / 10</p>
            </div>
            <div className="info-card">
              <h3>Intermediate (MPC)</h3>
              <h4>Sahithi Junior College, Khammam</h4>
              <p>2020 – 2022 · CGPA: 8.6 / 10</p>
            </div>
          </div>
          <div className="certifications">
            <h3>Certifications</h3>
            <p>➤ Java Full Stack Development — JSpiders · 27 Jul 2026</p>
            <p>➤ Introduction to Artificial Intelligence · June 2025</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);
