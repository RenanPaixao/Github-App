import GlobalStyles from './assets/styles/GlobalStyles';
import NavegationTop from './components/NavegationTop/index';
import Repositories from './pages/Repositories';
// import Home from './pages/Home/index';

function App() {
  return (
    <>
      <GlobalStyles />
      <NavegationTop />
      <Repositories />
    </>
  );
}

export default App;
