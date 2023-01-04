import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

/**
 * Carousel component to use on About page.
 * @param {*} props 
 * @returns 
 * 
 * Each image should be 1378 × 917 pixels to keep carousel uniform.
 * Each image should be named in the following format: 
 *    about-concert[insert quarter abbreviation].jpg
 *    Example: about-concertFA22.jpg
 */
const CarouselAbout = (props) => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./images/about-concertSP16.jpg")}
          alt="First slide: Spring 2016 Concert"
        />
        <Carousel.Caption>
          <h3>Spring 2016</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./images/about-concertFA16.jpg")}
          alt="Fall 2016 Concert"
        />
        <Carousel.Caption>
          <h3>Fall 2016</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./images/about-concertSP17.jpg")}
          alt="Spring 2017 Concert"
        />
        <Carousel.Caption>
          <h3>Spring 2017</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./images/about-concertFA17.jpg")}
          alt="Fall 2017 Concert"
        />
        <Carousel.Caption>
          <h3>Fall 2017</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./images/about-concertWI18.jpg")}
          alt="Winter 2018 Concert"
        />
        <Carousel.Caption>
          <h3>Winter 2018</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./images/about-concertSP18.jpg")}
          alt="Spring 2018 Concert"
        />
        <Carousel.Caption>
          <h3>Spring 2018</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./images/about-concertFA18.jpg")}
          alt="Fall 2018 Concert"
        />
        <Carousel.Caption>
          <h3>Fall 2018</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./images/about-concertSP22.jpg")}
          alt="Spring 2022 Concert"
        />
        <Carousel.Caption>
          <h3>Spring 2022</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./images/about-concertFA22.jpg")}
          alt="Fall 2022 Concert"
        />
        <Carousel.Caption>
          <h3>Fall 2022</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselAbout;