import React, { FunctionComponent, useState } from 'react';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';

const PokemonAdd: FunctionComponent = () => {
  // On génère un identifiant unique pour notre futur pokémon.
  // new Date().getTime() : timestamp (millisecondes écoulées depuis 1970)
  const [id] = useState<number>(new Date().getTime());
  // Création d'un pokémon vièrge avec identifiant unique.
  const [pokemon] = useState<Pokemon>(new Pokemon(id));

  return (
    <div>
      {pokemon && (
        <div className="row">
          <h2 className="header center">Ajouter un pokémon</h2>
          <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
        </div>
      )}
    </div>
  );
};

export default PokemonAdd;
