import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SkillCard from '../../components/SkillCard/SkillCard';
import data from '../../assets/data/projects_data';
import * as S from './styles';

function Skills() {
  return (
    <S.Main>
      <Header />
      <S.Section>
        <S.Ul>
          {data.skills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              icon={skill.icon}
              link={skill.link}
            />
          ))}
        </S.Ul>
      </S.Section>
      <Footer />
    </S.Main>
  );
}

export default Skills;
