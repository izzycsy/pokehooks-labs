import React, { createContext, useReducer } from 'react';
import { pokemonReducer } from './reducers';
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from './actions';

const PokemonContext = createContext();

const PokemonProvider = (props) => {
  const defaultState = {
    pokemons: [],
    capturedPokemons: []
  };

  const [state, dispatch] = useReducer(pokemonReducer, defaultState);

  const capture = (pokemon) => () => {
    dispatch({ type: CAPTURE, pokemon });
  };

  const release = (pokemon) => () => {
    dispatch({ type: RELEASE, pokemon });
  };

  const addPokemon = (pokemon) => {
    dispatch({ type: ADD_POKEMON, pokemon });
  };

  const addPokemons = (pokemons) => {
    dispatch({ type: ADD_POKEMONS, pokemons });
  };

  const providerValue = {
    state,
    capture,
    release,
    addPokemon,
    addPokemons
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
}

export { PokemonContext, PokemonProvider };
