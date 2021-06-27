import FollowBarStyle from './style';
import { Link } from 'react-router-dom';

function FollowBar() {
  return (
    <FollowBarStyle>
      <Link to="/followers">
        <li>
          <h2>32</h2>
          <p>Seguidores</p>
        </li>
      </Link>
      <Link to="/following">
        <li>
          <h2>32</h2>
          <p>Seguindo</p>
        </li>
      </Link>
      <Link to="/repositories">
        <li>
          <h2>10</h2>
          <p>Repos</p>
        </li>
      </Link>
    </FollowBarStyle>
  );
}

export default FollowBar;
