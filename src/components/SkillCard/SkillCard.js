import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function SkillCard(props) {
  return (
    <li>
      <S.Skill href={props.link} target='_blank' rel='noopener noreferrer'>
        <S.Image src={props.icon} alt={`${props.name} icone`} />
        <S.SkillName>{props.name}</S.SkillName>
      </S.Skill>
    </li>
  );
}

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SkillCard;
