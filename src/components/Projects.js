import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import comingsoon from "../assets/img/Coming-soon.png";
import p1 from "../assets/img/pic-1.png";
import p2 from "../assets/img/pic-2.png";
import p3 from "../assets/img/pic-3.png";
import p4 from "../assets/img/pic-4.png";
import p5 from "../assets/img/pic-5.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: p1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: p2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: p5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
  ];

  const projects2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
  ];
  const projects3 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: comingsoon,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have a lot of experience in delivering projects, both individual and team projects, web applications for desktop and mobile, iOS and Android. Here are some examples of my projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills align-items-center justify-content-center mb-5" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
