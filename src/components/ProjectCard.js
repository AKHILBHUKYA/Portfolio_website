import { Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={url} target="_blank" rel="noreferrer" className="project-github">
            <Github /> GitHub
          </a>
        </div>
      </div>
    </Col>
  );
};
