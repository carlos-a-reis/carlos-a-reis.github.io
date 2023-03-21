import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard(props) {
  return (
    <article>
      <h1>{props.name}</h1>
      <a href={props.link} target='_blank' rel='noopener noreferrer'>
        <img src={props.image} />
      </a>
      <p>{props.description}</p>
    </article>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
