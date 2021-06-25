import Container from './style';

import HomeMenu from '../../assets/images/homeMenu.svg';
import GithubMenu from '../../assets/images/githubMenu.svg';
import GroupMenu from '../../assets/images/groupMenu.svg';

function MenuBar() {
  return (
    <Container>
      <li>
        <img src={HomeMenu} alt="botão para página principal" />
        <p>Home</p>
      </li>
      <li>
        <img src={GithubMenu} alt="botão para listar repositórios" />
        <p>Repos</p>
      </li>
      <li>
        <img src={GroupMenu} alt="botão para listar seguidores" />
        <p>Seguidores</p>
      </li>
      <li>
        <img
          src={GroupMenu}
          alt="botão para listar pessoas que se está seguindo"
        />
        <p>Seguindo</p>
      </li>
    </Container>
  );
}

export default MenuBar;
