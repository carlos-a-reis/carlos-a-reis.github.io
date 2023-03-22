import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SkillCard from '../../components/SkillCard/SkillCard';
import data from '../../assets/data/projects_data';

function Skills() {
  return (
    <main>
      <Header />
      <section>
        <ul>
          {data.skills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              icon={skill.icon}
              link={skill.link}
            />
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}

export default Skills;
