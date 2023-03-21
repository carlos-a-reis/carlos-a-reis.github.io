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
            <S.Span
              active={pathname === '/' ? 'active' : ''}
              onClick={() => navigate('/')}
            >
              HOME
            </S.Span>
          </S.Li>
          <S.Li>
            <S.Span
              active={pathname === '/projetos' ? 'active' : ''}
              onClick={() => navigate('/projetos')}
            >
              PROJETOS
            </S.Span>
          </S.Li>
          <S.Li>
            <S.Span
              active={pathname === '/skills' ? 'active' : ''}
              onClick={() => navigate('/skills')}
            >
              SKILLS
            </S.Span>
          </S.Li>
          <S.LiWithoutBorder>
            <S.Span
              active={pathname === '/sobre' ? 'active' : ''}
              onClick={() => navigate('/sobre')}
            >
              SOBRE
            </S.Span>
          </S.LiWithoutBorder>
        </S.Ul>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
