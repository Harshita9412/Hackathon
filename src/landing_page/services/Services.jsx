import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import Slider from 'react-slick';
import Card from './Card';
import Features from './Features';
import { CSSTransition } from 'react-transition-group';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const nodeRef = useRef(null); // Create a reference for the transition container

  // Fetch services from the backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:8000/services");
        setServices(response.data);
      } catch (error) {
        console.log("Error fetching services: ", error);
      }
    };
    fetchServices();
  }, []);

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
              {services.length > 0 ? (
                services.slice(0, 5).map((service) => (
                  <div key={service._id} className="col-12 col-md-4 col-lg-4 mb-4">
                    <Card
                      image={service.image}
                      title={service.name}
                      onClick={() => handleCardClick(service)}
                    />
                  </div>
                ))
              ) : (
                <p>Loading services...</p>
              )}
            </Slider>
          </div>

          <div className="slider-container">
            <Slider {...settings}>
              {services.length > 0 ? (
                services.slice(5, 9).map((service) => (
                  <div key={service._id} className="col-12 col-md-4 col-lg-4 mb-4">
                    <Card
                      image={service.image}
                      title={service.name}
                      onClick={() => handleCardClick(service)}
                    />
                  </div>
                ))
              ) : (
                <p>Loading services...</p>
              )}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
