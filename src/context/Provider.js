import Context from './Context';
import { useState, useEffect } from 'react';
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

  return (
    <Context.Provider
      value={{
        user: user,
        setUser: setUser,
        searchUser: (username) => searchUser(username),
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;
