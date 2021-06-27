import NavegationTopStyle from './style';
import { Link, useHistory } from 'react-router-dom';

import Arrow from '../../assets/images/arrowLeft.svg';

function NavegationTop(props) {
  let history = useHistory();

  return (
    <NavegationTopStyle>
      <Link onClick={() => history.go(-1)}>
        <img src={Arrow} alt="Seta para voltar" />
      </Link>
      <h3>10 {props.page}</h3> {/* Número vindo da API */}
    </NavegationTopStyle>
  );
}

export default NavegationTop;
