import React from 'react';
import PropTypes from 'prop-types';

function SkillCard(props) {
  return (
    <li>
      <a href={props.link} target='_blank' rel='noopener noreferrer'>
        <img src={props.icon} />
      </a>
      <p>{props.name}</p>
    </li>
  );
}

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SkillCard;
