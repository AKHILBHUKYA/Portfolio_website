
import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Download } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
const toRotate = [
  "Software Development Engineer",
  "Backend Developer",
  "Java & Spring Boot Developer",
];

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(250 - Math.random() * 80);

 
  const period = 1800;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 1.8);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(350);
    }
  }, [loopNum, isDeleting, text]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <span className="tagline">
                    Welcome to my Portfolio
                  </span>

                  <h1>
                    Hi, I'm Akhil <br />

                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>
                    Software Development Engineer focused on Java, Spring Boot,
                    REST APIs and database-driven applications. I enjoy
                    building practical backend systems and connecting them with
                    clean, responsive web interfaces.
                  </p>

                  <div className="banner-actions">
                    <a href="#connect" className="banner-link">
                      Let's Connect <ArrowRightCircle size={25} />
                    </a>

                    <a
                      href="/Akhil_Bhukya_Resume.pdf"
                      className="resume-link"
                      download
                    >
                      Resume <Download size={20} />
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={5} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn"
                      : ""
                  }
                >
                  <img
                    src={headerImg}
                    alt="Software developer illustration"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};