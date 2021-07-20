const getPokemonByName = require("./get-pokemon");

const getParamsToPokemonName = async (req, res) => {
  try {
    const { pokemon } = req.params;
    const response = await getPokemonByName(pokemon);
    return res.status(200).send(response);
  } catch (err) {
    console.log(" errrrrrrrrrouuuuuuuuuuuu", err);
    return res.status(404).json({ message: "Pokemon not found" });
  }
};

module.exports = getParamsToPokemonName;
