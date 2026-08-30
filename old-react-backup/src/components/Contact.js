import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Envelope, Telephone, Linkedin, Github } from "react-bootstrap-icons";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

const emailAddress = "akhilbhukya16@gmail.com";
const phoneNumber = "+91 7331107036";
const linkedinUrl = "https://linkedin.com/in/akhil-bhukya-a42422353";
const githubUrl = "https://github.com/AKHILBHUKYA";

export const Contact = () => {
  const formInitialDetails = { firstName: "", lastName: "", email: "", phone: "", message: "" };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState("");

  const onFormUpdate = (category, value) => setFormDetails({ ...formDetails, [category]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = `${formDetails.firstName} ${formDetails.lastName}`.trim();
    const subject = encodeURIComponent(`Portfolio Contact from ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${formDetails.email}\nPhone: ${formDetails.phone}\n\n${formDetails.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={5}>
            <TrackVisibility>
              {({ isVisible }) => <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Akhil" />}
            </TrackVisibility>
          </Col>
          <Col size={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <div className="contact-details">
                    <a href={`mailto:${emailAddress}`}><Envelope /> {emailAddress}</a>
                    <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}><Telephone /> {phoneNumber}</a>
                    <a href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
                    <a href={githubUrl} target="_blank" rel="noreferrer"><Github /> GitHub</a>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input required type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input required type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate("email", e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate("phone", e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea required rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
                        <button type="submit"><span>Send Email</span></button>
                      </Col>
                      {status && <Col><p className="success">{status}</p></Col>}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
