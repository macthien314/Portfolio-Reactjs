import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Blogging Website",
      description: "Sign up, Login, CRUD",
      imgUrl: projImg1,
      linkDemo: 'https://blogging-beige.vercel.app/',
    },
    {
      title: "Udemy Clone",
      description: "Lading Page SCSS",
      imgUrl: projImg2,
      linkDemo: 'https://macthien314.github.io/SellCourses-Web-SCSS/'
    },
    {
      title: "Blogging NodeJS",
      description: `ExpressJS, MongoDB, CRUD, sort, filter, search item, Pagination, Login, Logout`,
      imgUrl: projImg8,
      linkDemo: 'https://blogging314.up.railway.app/'
    },

    {
      title: "FastFood Website",
      description: `Reactjs, Bootstrap, Redux Toolkit, cart, search item, Pagination`,
      imgUrl: projImg9,
      linkDemo: 'https://fastfood-shop314.vercel.app/'
    },
    {
      title: "Bake website",
      description: "Design & Development",
      imgUrl: projImg3,
      linkDemo: 'https://macthien314.github.io/Bake-LandingPage/'
    },
       {
      title: "Education Website",
      description: "Lading Page",
      imgUrl: projImg7,
      linkDemo: 'https://macthien314.github.io/WebEducation-Bootstrap5/'
    },
    {
      title: "Game Gourd Crab shrimp fish",
      description: "Design & Development",
      imgUrl: projImg4,
      linkDemo: 'https://macthien314.github.io/GameBauCua-Reactjs/'
    },
    {
      title: "ToDoList Redux Saga",
      description: "Design & Development",
      imgUrl: projImg5,
      linkDemo: 'https://macthien314.github.io/ToDoList-API-ReduxSaga/'
    },
    {
      title: "The Band",
      description: "Lading Page",
      imgUrl: projImg6,
      linkDemo: 'https://macthien314.github.io/Band-Web-Html-Css/index.html'
    }

 
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link style={{cursor:'pointer'}} eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link style={{cursor:'pointer'}} eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link style={{cursor:'pointer'}} eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0,6).map((project, index) => {
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
                          projects.slice(6).map((project, index) => {
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
                    <p>Comming soon ...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='colorSharp'></img>
    </section>
  )
}
