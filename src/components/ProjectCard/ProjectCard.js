import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function ProjectCard(props) {
  return (
    <S.Article>
      <S.ProjectName>{props.name}</S.ProjectName>
      <a href={props.link} target='_blank' rel='noopener noreferrer'>
        <S.Image src={props.image} />
      </a>
      <S.Description>{props.description}</S.Description>
    </S.Article>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
