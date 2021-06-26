import Container from './style';

import HomeMenu from '../../assets/images/homeMenu.svg';
import GithubMenu from '../../assets/images/githubMenu.svg';
import GroupMenu from '../../assets/images/groupMenu.svg';

import { Link } from 'react-router-dom';

function MenuBar() {
  return (
    <Container>
      <Link to="/home">
        <li>
          <img src={HomeMenu} alt="botão para página principal" />
          <p>Home</p>
        </li>
      </Link>
      <Link to="/repositories">
        <li>
          <img src={GithubMenu} alt="botão para listar repositórios" />
          <p>Repos</p>
        </li>
      </Link>
      <Link to="/followers">
        <li>
          <img src={GroupMenu} alt="botão para listar seguidores" />
          <p>Seguidores</p>
        </li>
      </Link>
      <Link to="/following">
        <li>
          <img
            src={GroupMenu}
            alt="botão para listar pessoas que se está seguindo"
          />
          <p>Seguindo</p>
        </li>
      </Link>
    </Container>
  );
}

export default MenuBar;
