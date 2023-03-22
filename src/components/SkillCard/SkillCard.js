import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function SkillCard(props) {
  return (
    <S.Li>
      <a href={props.link} target='_blank' rel='noopener noreferrer'>
        <S.Image src={props.icon} />
      </a>
      <S.SkillName>{props.name}</S.SkillName>
    </S.Li>
  );
}

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SkillCard;
