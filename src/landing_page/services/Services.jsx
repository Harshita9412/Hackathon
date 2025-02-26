import React, { useState, useRef } from 'react'; // Import useRef
import Slider from 'react-slick';
import Card from './Card';
import Features from './Features';
import { CSSTransition } from 'react-transition-group';
import './Services.css';

const services = [
  { id: 0, image: "/media/images/individual.avif", name: "Individual Therapy" },
  { id: 1, image: "/media/images/couples.avif", name: "Couples Therapy" },
  { id: 2, image: "/media/images/teen.avif", name: "Teen Therapy" },
  { id: 3, image: "/media/images/psychiatric.avif", name: "Psychiatric Therapy" },
  { id: 4, image: "/media/images/adult.webp", name: "Adult Therapy" },
  { id: 5, image: "/media/images/child.jpg", name: "Child Therapy" },
  { id: 6, image: "/media/images/anxiety.jpeg", name: "Anxiety" },
  { id: 7, image: "/media/images/self_care.webp", name: "Selfcare" },
  { id: 8, image: "/media/images/depression.jpg", name: "Depression" },
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const nodeRef = useRef(null); // Create a reference for the transition container

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <div className="slider-arrow next-arrow"><i className="fa-solid fa-arrow-right"></i></div>,
    prevArrow: <div className="slider-arrow prev-arrow"><i className="fa-solid fa-arrow-left"></i></div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="services">
      {/* Updated CSSTransition with nodeRef */}
      <CSSTransition
        in={!selectedService}
        timeout={500}
        classNames="fade"
        unmountOnExit
        nodeRef={nodeRef} // Use nodeRef here
      >
        <div ref={nodeRef} className="heading" id="services_text">
          discover the right <br />
          <b>support for your journey</b>
        </div>
      </CSSTransition>

      {/* If a service is selected, render the Features component */}
      {selectedService ? (
        <Features service={selectedService} />
      ) : (
        <>
          <div className="slider-container">
            <Slider {...settings}>
              {services.slice(0, 5).map((service) => (
                <Card
                  key={service.id}
                  image={service.image}
                  title={service.name}
                  onClick={() => handleCardClick(service)}
                />
              ))}
            </Slider>
          </div>

          <div className="slider-container">
            <Slider {...settings}>
              {services.slice(5, 9).map((service) => (
                <Card
                  key={service.id}
                  image={service.image}
                  title={service.name}
                  onClick={() => handleCardClick(service)}
                />
              ))}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
}

export default Services;
