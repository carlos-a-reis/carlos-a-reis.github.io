import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import * as S from './styles';
import curriculum from '../../assets/curriculum/curriculo.pdf';

function Home() {
  return (
    <S.Main>
      <S.BackGround />
      <Header />
      <S.Section>
        <S.Div>
          <S.H1>CARLOS AUGUSTO</S.H1>
          <S.H6>DESENVOLVEDOR FULL STACK JUNIOR</S.H6>
        </S.Div>
        <S.Download href={curriculum} download>Baixar Currículo</S.Download>
      </S.Section>
      <Footer />
    </S.Main>
  );
}

export default Home;
