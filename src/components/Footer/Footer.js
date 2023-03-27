import React from 'react';
import * as S from './styles';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import gmailIcon from '../../assets/icons/gmail.svg';
import githubIcon from '../../assets/icons/github.svg';
import whatsappIcon from '../../assets/icons/whatsapp.svg';

function Footer() {
  return (
    <S.Footer>
      <S.Contacts>
        <li>
          <a
            href='https://linkedin.com/in/carlos-augusto-dos-reis'
            target='_blank'
            rel='noopener noreferrer'
          >
            <S.Img src={linkedinIcon} alt='Icone do LinkedIn' />
          </a>
        </li>
        <li>
          <a
            href='mailto:carlos.aug.dosreis@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <S.Img src={gmailIcon} alt='Icone do Gmail' />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/carlos-a-reis'
            target='_blank'
            rel='noopener noreferrer'
          >
            <S.Img src={githubIcon} alt='Icone do GitHub' />
          </a>
        </li>
        <li>
          <a
            href='https://api.whatsapp.com/send/?phone=27992037517'
            target='_blank'
            rel='noopener noreferrer'
          >
            <S.Img src={whatsappIcon} alt='Icone do Whatsapp' />
          </a>
        </li>
      </S.Contacts>
    </S.Footer>
  );
}

export default Footer;
