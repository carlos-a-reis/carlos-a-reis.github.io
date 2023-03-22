import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import data from '../../assets/data/projects_data';
import * as S from './styles';

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const projects = document.getElementById('projectList').children;
    projects[currentProject].scrollIntoView({
      inline: 'center',
      behavior: 'smooth',
    });
  }, [currentProject]);

  const setSliderPosition = (direction) => {
    if (direction === 'left') {
      if (currentProject - 1 < 0) {
        setCurrentProject(data.projects.length - 1);
      } else {
        setCurrentProject(currentProject - 1);
      }
    } else {
      if (currentProject + 1 >= data.projects.length) {
        setCurrentProject(0);
      } else {
        setCurrentProject(currentProject + 1);
      }
    }
  };

  const slideButton = (event, direction) => {
    event.preventDefault();
    setSliderPosition(direction);
  };

  return (
    <S.Main>
      <Header />
      <S.Section>
        <S.Projects id='projectList'>
          {data.projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              image={project.image}
              description={project.description}
              link={project.link}
            />
          ))}
        </S.Projects>
        <S.Div>
          <button
            type='button'
            onClick={(event) => slideButton(event, 'left')}
          >
            <S.IL className='material-symbols-rounded'>{'arrow_back_ios'}</S.IL>
          </button>
          <button
            type='button'
            onClick={(event) => slideButton(event, 'right')}
          >
            <S.IR className='material-symbols-rounded'>
              {'arrow_forward_ios'}
            </S.IR>
          </button>
        </S.Div>
      </S.Section>
      <Footer />
    </S.Main>
  );
}

export default Projects;
