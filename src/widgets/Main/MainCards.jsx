import React from "react";
import './MainCards.css'
const MainCards = () => {
    const projects = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: "My first project",
    description: "It is my first project, which I have ever made",
    img: "/src/assets/images/photo_bg.png",
    link: "#"
  }));

    
    return (
    <div className="projects-grid-container box-shadow">
      <div className="header-text box-shadow">
        <h2>My Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card box-shadow">
            <img src={project.img} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Перейти</a>
          </div>
        ))}
      </div>
    </div>
  );
    
}
     
    

export default MainCards;