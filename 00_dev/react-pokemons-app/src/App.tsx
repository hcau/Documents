import React, { FunctionComponent } from 'react';
import { BrowserRouter as Route, Switch, Router, Link } from 'react-router-dom';

const App: FunctionComponent = () => (
  <Router>
    {/* La barre de navigation commun à toutes les pages */}
    <nav>
      <div className="nav-wrapper teal">
        <Link to="/" className="brand-logo center">
          Pokédex
        </Link>
      </div>
    </nav>
    {/* Le système de gestion des routes de notre application */}
    <Switch>
      <Route exact path="/" component={PokemonList} />
      <Route exact path="/pokemons" component={PokemonList} />
      <Route path="/pokemons/:id" component={PokemonDetail} />
    </Switch>
  </Router>
);

export default App;
