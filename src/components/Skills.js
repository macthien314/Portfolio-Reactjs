import meter from "../assets/img/meter.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Having a solid knowledge of HTML, CSS, JAVASCRIPT and REACTJS, I always try to hone my skills every day.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter} alt="Image1" />
                                <h5>HTML/CSS(SCSS)</h5>
                            </div>
                            <div className="item">
                                <img src={meter} alt="Image2" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={meter} alt="Image3" />
                                <h5>BOOTSTRAP</h5>
                            </div>
                            <div className="item">
                                <img src={meter} alt="Image4" />
                                <h5>REACTJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter} alt="Image5" />
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter} alt="Image5" />
                                <h5>NodeJS(ExpressJS)</h5>
                            </div>
                            <div className="item">
                                <img src={meter} alt="Image5" />
                                <h5>Java(Spring MVC)</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image6" />
    </section>
  )
}
