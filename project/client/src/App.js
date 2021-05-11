import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hjem from './pages/Hjem';
import Artikkel from './pages/Artikkel';
import Kontakt from './pages/Kontakt';
import Omoss from './pages/Omoss';
import Galleri from './pages/Galleri';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

/**
 * Importerer Routes her da den "styrer" hele applikasjonen
 * Hvis du bruker Styled Components kan du også beholde Theme her (se inne i /styles/Theme.js)
 */

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={Hjem} path="/" exact />
          <Route component={Artikkel} path="/artikkel/:slug" />
          <Route component={Kontakt} path="/kontakt" />
          <Route component={Omoss} path="/Omoss" />
          <Route component={Galleri} path="/galleri" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;
