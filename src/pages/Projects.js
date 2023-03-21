import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import data from '../assets/data/projects_data';

function Projects() {
  return (
    <main>
      <Header />
      <section>
        {data.projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default Projects;
