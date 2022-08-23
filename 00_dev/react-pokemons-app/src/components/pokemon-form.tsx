import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';

type Props = {
  pokemon: Pokemon;
};

type Field = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

type Form = {
  name: Field;
  hp: Field;
  cp: Field;
  types: Field;
};

const PokemonForm: FunctionComponent<Props> = ({ pokemon }) => {
  const [form, setForm] = useState<Form>({
    name: { value: pokemon.name, isValid: true },
    hp: { value: pokemon.name, isValid: true },
    cp: { value: pokemon.name, isValid: true },
    types: { value: pokemon.name, isValid: true },
  });

  const types: string[] = [
    'Plante',
    'Feu',
    'Eau',
    'Insecte',
    'Normal',
    'Electrik',
    'Poison',
    'Fée',
    'Vol',
    'Combat',
    'Psy',
  ];

  return (
    <form>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-image">
              <img
                src={pokemon.picture}
                alt={pokemon.name}
                style={{ width: '250px', margin: '0 auto' }}
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                {/* Pokemon name */}
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input id="name" type="text" className="form-control"></input>
                </div>
                {/* Pokemon hp */}
                <div className="form-group">
                  <label htmlFor="hp">Point de vie</label>
                  <input id="hp" type="number" className="form-control"></input>
                </div>
                {/* Pokemon cp */}
                <div className="form-group">
                  <label htmlFor="cp">Dégâts</label>
                  <input id="cp" type="number" className="form-control"></input>
                </div>
                {/* Pokemon types */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map((type) => (
                    <div key={type} style={{ marginBottom: '10px' }}>
                      <label>
                        <input
                          id={type}
                          type="checkbox"
                          className="filled-in"
                        ></input>
                        <span>
                          <p className={formatType(type)}>{type}</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">
                  Valider
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PokemonForm;
