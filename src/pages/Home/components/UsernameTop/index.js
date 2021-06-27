import UsernameTopStyle from './style';
import Logout from '../../../../assets/images/logout.svg';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import Context from '../../../../context/Context';

function UsernameTop({ login }) {
  const { setUser } = useContext(Context);

  return (
    <UsernameTopStyle>
      <p>#{login}</p>
      <Link to="/" onClick={() => setUser({})}>
        <p id="exit">
          Sair <img src={Logout} alt="Logout" />
        </p>
      </Link>
    </UsernameTopStyle>
  );
}

export default UsernameTop;
