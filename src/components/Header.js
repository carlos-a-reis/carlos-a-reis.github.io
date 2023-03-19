import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [navDisplay, setNavDisplay] = useState('none');
  const navigate = useNavigate();

  const setDisplayVisibility = () => {
    if (navDisplay === 'none') {
      setNavDisplay('flex');
    } else {
      setNavDisplay('none');
    }
  }

  return(
    <header>
      <i onClick={() => setDisplayVisibility()}>menu</i>
      <nav style={{display: navDisplay}}>
        <ul>
          <li onClick={() => navigate("/")}>HOME</li>
          <li onClick={() => navigate("/projetos")}>PROJETOS</li>
          <li onClick={() => navigate("/skills")}>SKILLS</li>
          <li onClick={() => navigate("/sobre")}>SOBRE</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;