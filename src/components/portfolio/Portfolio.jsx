import "./portfolio.css";

import IMG1 from "../../assets/IMG1.JPG";
import IMG2 from "../../assets/IMG2.JPG";
import IMG3 from "../../assets/IMG3.JPG";
import IMG4 from "../../assets/IMG4.JPG";
import IMG5 from "../../assets/IMG5.JPG";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Font Awesome clone with React.js",
      img: IMG1,
      description:
        "Font Awesome is a library providing scalable vector icons; include its CSS in your HTML, then use icons with the <i> tag and appropriate classes.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://font-awesome-react.vercel.app/",
      github: "https://github.com/farhadhossaineu/font-awesome-react.git",
    },
    {
      id: 2,
      title: "BMI Calculator App",
      img: IMG4,
      description:
        "BMI is a quick measure of body fat using weight and height, categorizing individuals as underweight, normal weight, overweight, or obese.",
      technologies: "React | CSS | Javascript | HTML",
      link: "https://bmi-calculator-react-js-rho.vercel.app/",
      github: "https://github.com/farhadhossaineu/Bmi-Calculator-ReactJs.git",
    },
    {
      id: 3,
      title: "Data Fetch from a website",
      img: IMG2,
      description: "This porject have two problem. One is a kind of data fetch from a website and other is add task with active or completed.",
      technologies: "React | CSS | Javascript",
      link: "https://react-task-mediusware.vercel.app/",
      github: "https://github.com/farhadhossaineu/react-task-mediusware.git",
    },
    {
      id: 4,
      title: "Task Management System",
      img: IMG3,
      description:
        "A task management system is a tool that helps organize and track tasks within a project or workflow.",
      technologies: "Html | CSS | JavaScript | React Js",
      link: "https://task-management-react-pi.vercel.app/",
      github: "https://github.com/farhadhossaineu/task-management-react.git",
    },
    {
      id: 5,
      title: "Mess Management System",
      img: IMG5,
      description:
        "A mess management system is a software for efficient planning, ordering, and billing in institutional food services.",
      technologies: "Html | Styled-components | React Js | Node Js | Mongodb",
      link: "#",
      github: "https://github.com/farhadhossaineu/MessManagement.git",
    },
    {
      id: 6,
      title: "Portfolio Website",
      img: IMG6,
      description:
        "A portfolio website is a concise, online display of a person's work and skills. This is my personal portfolio",
      technologies: "Html | Scss | Javascript",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
