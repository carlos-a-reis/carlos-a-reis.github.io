import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './styles';

function Header() {
  const [navVisibility, setNavVisibility] = useState('hidden');
  const [navHeight, setNavHeight] = useState('0px');
  const [menuIcon, setMenuIcon] = useState('menu');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const openAndCloseMenu = () => {
    if (navVisibility === 'hidden') {
      setNavVisibility('visible');
      setNavHeight('204px');
      setMenuIcon('close');
    } else {
      setNavVisibility('hidden');
      setNavHeight('0px');
      setMenuIcon('menu');
    }
  };

  return (
    <S.Header>
      <S.I
        className='material-symbols-rounded'
        onClick={() => openAndCloseMenu()}
      >
        {menuIcon}
      </S.I>
      <S.Nav style={{ display: navVisibility, height: navHeight }}>
        <S.Ul>
          <S.Li>
            <S.Page
              active={pathname === '/' ? 'active' : ''}
              onClick={() => navigate('/')}
            >
              HOME
            </S.Page>
          </S.Li>
          <S.Li>
            <S.Page
              active={pathname === '/projetos' ? 'active' : ''}
              onClick={() => navigate('/projetos')}
            >
              PROJETOS
            </S.Page>
          </S.Li>
          <S.Li>
            <S.Page
              active={pathname === '/skills' ? 'active' : ''}
              onClick={() => navigate('/skills')}
            >
              SKILLS
            </S.Page>
          </S.Li>
          <S.LiWithoutBorder>
            <S.Page
              active={pathname === '/sobre' ? 'active' : ''}
              onClick={() => navigate('/sobre')}
            >
              SOBRE
            </S.Page>
          </S.LiWithoutBorder>
        </S.Ul>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
