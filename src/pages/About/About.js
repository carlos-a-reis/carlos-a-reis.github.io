import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import * as S from './styles';

function About() {
  return (
    <S.Main>
      <Header />
      <S.Section>
        <S.Image src='http://source.unsplash.com/random/500x500/?building' />
        <S.Div>
          <S.Paragraph>
            Sou um programador full stack junior com formação em Desenvolvimento
            Web pela Trybe, com experiência em mais de 30 projetos onde pude
            praticar meus conhecimentos adquiridos em tecnologias como
            JavaScript, HTML, CSS, React, Node, Express.js, SQL, Git,
            Typescript, Python, MongoDB, Jest, React Testing Library, entre
            outras linguagens e frameworks, além de metodologias ágeis, como
            Scrum e Kanban.
          </S.Paragraph>
          <S.Paragraph>
            Sou apaixonado pelas possibilidades de criação e inovação que o
            estudo da programação fornece e procuro me aprofundar e aprender
            cada vez mais sobre esse mundo. Por isso, estou no processo de
            transição de carreira, migrando da área financeira para tecnologia.
          </S.Paragraph>
          <S.Paragraph>
            Diante disso, tenho como objetivo desenvolver minha carreira de
            forma que possa estar sempre em contato com novos aprendizados e
            tendo a possibilidade de exercer minha criatividade.
          </S.Paragraph>
        </S.Div>
      </S.Section>
      <Footer />
    </S.Main>
  );
}

export default About;
