import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hjem from './pages/Hjem';
import Nyheter from './pages/Nyheter';
import OnePost from './components/OnePost';
import Artikkel from './components/Artikkel';
import Kontakt from './pages/Kontakt';
import Om from './components/Om';
import Galleri from './pages/Galleri';
import NavBar from './components/NavBar';

import './styles/all.scss';

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
          <Route component={Nyheter} path="/nyheter" />
          <Route component={OnePost} path="/artikkel/:slug" />
          <Route component={Artikkel} path="/artikkel" />
          <Route component={Kontakt} path="/kontakt" />
          <Route component={Om} path="/om" />
          <Route component={Galleri} path="/galleri" />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
