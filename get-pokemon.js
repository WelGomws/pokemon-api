const axios = require("axios");

const getPokemonByName = async (pokemonName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const response = await axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => new Error(err));

  const pokemonData = {
    name: response.name,
    id: response.id,
    height: response.height,
    weight: response.weight,
    types: response.types.map((item) => item.type.name),
    moves: response.moves.map((item) => item.move.name),
    abilities: response.abilities.map((item) => item.ability.name),
    sprites: response.sprites,
  };

  return pokemonData;
};

module.exports = getPokemonByName;
