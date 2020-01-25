import React from 'react';

const Pokecard = ({ id, name, type, exp }) => {
  const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
  let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);
  let imgSrc = `${POKE_API}${padToThree(id)}.png`;

  return (
    <div className="pokecard-wrapper">
      <div className="pokecard">
        <h2 className="pokemon-name">{name}</h2>
        <img src={imgSrc} alt="" className="pokemon-image" />
        <div className="pokemon-type">type: {type}</div>
        <div className="pokemon-exp">EXP: {exp}</div>
      </div>
    </div>
  );
};

export default Pokecard