import NavegationTopStyle from './style';

import Arrow from '../../assets/images/arrowLeft.svg';

function NavegationTop() {
  return (
    <NavegationTopStyle>
      <img src={Arrow} alt="Seta para voltar" />
      <h3>10 repositórios</h3> {/* Número vindo da API */}
    </NavegationTopStyle>
  );
}

export default NavegationTop;
