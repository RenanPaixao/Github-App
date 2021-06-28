import Context from './Context';
import { useState } from 'react';
import axios from 'axios';

const user1 = {
  login: null,
  name: null,
  email: null,
  location: null,
  company: null,
  bio: null,
  avatar_url: null,
  followers_url: null,
  following_url: null,
  organizations_url: null,
  starred_url: null,
  public_repos: null,
  public_gists: null,
  followers: null,
  following: null,
};
function showAlert() {
  document.getElementById('alert').style.visibility = 'visible';
}

async function searchUser(username) {
  return await axios
    .get(`https://api.github.com/users/${username}`)
    .then((res) => {
      if (res.message === 'Not Found') {
        return 'Not Found';
      }
      return {
        login: res.data.login,
        name: res.data.name,
        email: res.data.email,
        location: res.data.location,
        company: res.data.company,
        bio: res.data.bio,
        avatarUrl: res.data.avatar_url,
        followersUrl: res.data.followers_url,
        followingUrl: res.data.following_url,
        organizationsUrl: res.data.organizations_url,
        starredUrl: res.data.starred_url,
        publicRepos: res.data.public_repos,
        publicGists: res.data.public_gists,
        followers: res.data.followers_url,
        following: res.data.following_url,
      };
    });
}

const Provider = ({ children }) => {
  const [user, setUser] = useState(user1);

  async function saveUser() {
    const valor = document.getElementById('username').value;

    if (valor.trim() === '') {
      showAlert();
      return false;
    }
    try {
      setUser(await searchUser(valor));
    } catch (err) {
      alert('Usuário não encontrado!');
      return false;
    }
    return true;
  }
  return (
    <Context.Provider
      value={{
        user: user,
        setUser: setUser,
        saveUser: saveUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;
