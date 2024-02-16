import React from 'react';
import './services.css';
import service_image1 from '../../assets/work-1.jpg';
import service_image2 from '../../assets/work-2.jpg';
import service_image3 from '../../assets/work-3.jpg';


const data = [
  {
    id: 1,
    image: service_image1,
    title: "Programmer",
    description:
      "Experienced coding programmer adept at crafting efficient software solutions using various languages and frameworks. Strong problem-solving skills and a deep understanding of development principles and collaborative team player with excellent communication skills, thriving in fast-paced environments.",
  },
  {
    id: 2,
    image: service_image2,
    title: "Frontend Developer",
    description:
      "Experienced frontend developer skilled in crafting engaging user experiences with HTML, CSS, and JavaScript. Proficient in modern frameworks like React and Next.js, with a focus on responsive design and performance optimization. Dedicated to delivering polished and intuitive interfaces that delight users and drive business results.",
  },
  {
    id: 3,
    image: service_image3,
    title: "Backend Developer",
    description:
      "Backend developer proficient in Java, Spring Boot, PHP, Docker, and MySQL. Skilled in building scalable web applications, optimizing database performance, and containerization for streamlined deployment processes. Strong collaborator with a focus on delivering high-quality solutions aligned with business goals.",
  },
];


function Services(props) {
    return (
        
        <section className="services container section" id='services'>
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({id, image, title, description}) => {
                    return(
                        <div className="services__card" key={id}>
                            <img src={image} alt="" className="services__img" />
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Services;