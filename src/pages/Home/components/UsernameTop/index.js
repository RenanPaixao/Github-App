import UsernameTopStyle from './style';
import Logout from '../../../../assets/images/logout.svg';

function UsernameTop() {
  return (
    <UsernameTopStyle>
      <p>#User</p>
      <p id="exit">
        Sair <img src={Logout} alt="Logout" />
      </p>
    </UsernameTopStyle>
  );
}

export default UsernameTop;
