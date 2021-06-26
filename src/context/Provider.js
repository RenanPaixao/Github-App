import Context from './Context';

const user = {
  name: 'renan',
};

const Provider = ({ children }) => {
  return <Context.Provider value={user}>{children}</Context.Provider>;
};

export default Provider;
