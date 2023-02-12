// import axios from "axios";

export const getPokemons = async (page, take) => {
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${take}&offset=${page * take}`
  );
  // const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await resp.json();

  return data;
};
