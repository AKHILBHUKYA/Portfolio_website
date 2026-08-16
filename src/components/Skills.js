import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CodeSlash, Cloud, Git, Braces, Cpu } from "react-bootstrap-icons";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const skills = [
    { icon: <Braces />, title: "Java & OOP", text: "Java, OOP, Data Structures & Algorithms" },
    { icon: <CodeSlash />, title: "Backend", text: "Spring Boot, Spring MVC, Hibernate, JDBC" },
    { icon: <CodeSlash />, title: "APIs", text: "REST APIs, WebSocket, API Integration & Testing" },
   { icon: <CodeSlash />, title: "Databases", text: "Oracle SQL, MySQL, PostgreSQL & Transactions" },
    { icon: <Cloud />, title: "Cloud & Deployment", text: "AWS and Docker" },
    { icon: <Git />, title: "Development Tools", text: "Git, GitHub, Maven, Postman, Debugging" },
    { icon: <Cpu />, title: "Languages", text: "Java, Python, JavaScript, SQL" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <p>Technologies I use to build backend services, database-driven applications and web interfaces.</p>
              <Carousel responsive={responsive} infinite className="owl-carousel owl-theme skill-slider">
                {skills.map((skill) => (
                  <div className="item skill-item" key={skill.title}>
                    <div className="skill-icon">{skill.icon}</div>
                    <h5>{skill.title}</h5>
                    <p>{skill.text}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
