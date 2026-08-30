import { Container, Row, Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-Commerce Web Application",
      description: "Java · Spring Boot · REST APIs · Oracle SQL · PayPal",
      imgUrl: projImg1,
      url: "https://github.com/AKHILBHUKYA/AI-Integrated-Ecommerce-Application",
    },
    {
      title: "NEXUS — Social Intelligence Workspace",
      description: "Java · Spring Boot · MySQL · React · WebSocket",
      imgUrl: projImg2,
      url: "https://github.com/AKHILBHUKYA/NEXUS-Social-Workspace",
    },
    {
      title: "AI Application using Ollama and Spring Boot",
      description: "Java · Spring Boot · Ollama · REST APIs",
      imgUrl: projImg3,
      url: "https://github.com/AKHILBHUKYA/AI-Ollama_SpringBoot",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Selected projects focused on backend development, APIs, databases, AI integration and real-time applications.</p>
                  <Row>
                    {projects.map((project) => (
                      <ProjectCard key={project.title} {...project} />
                    ))}
                  </Row>
                  <div className="projects-profile-link">
                    <a href="https://github.com/AKHILBHUKYA" target="_blank" rel="noreferrer">
                      <Github /> View GitHub Profile
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
