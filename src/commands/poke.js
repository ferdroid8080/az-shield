const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

const getPokemon = async (pokemon) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return {
      error: true,
      message: 'Failed retrieving data: ',
      detail: err.message
    };
  }
}

const poke = async (msg) => {
  const pokemon = msg.content.split(' ');
  if (pokemon.length > 1) {
    const pokedata = await getPokemon(pokemon[1]);
    if (pokedata.error) {
      msg.channel.send(`${pokedata.message} Pokemon Not Found!`);
    } else {
      const embed = new MessageEmbed()
      .setColor('#cfcfcf')
      .setTitle(`${pokedata.name}`)
      .setURL(pokedata.species.url)
      .setImage(pokedata.sprites.front_default)

      msg.channel.send({ embeds: [embed] });
    }
  }
}

module.exports = poke;
