import { Button } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { getPokemons } from "../../../application/Pokemon/pokemon";
import { PokemonList } from "./PokemonList";

export const Pokemon = () => {
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState("vacío");
  const take = 10;

  useEffect(() => {
    handleConsultar();
  }, []);

  const handleConsultar = useCallback(async (pageNew = page) => {
    const response = await getPokemons(pageNew, take);

    setPokemons(response);

    setPage(pageNew);
  });

  return (
    <>
      <h1>Pokemon</h1>
      <br />
      {pokemons.count > 0 && <PokemonList pokemons={pokemons.results} />}
      <Button variant="primary" onClick={() => handleConsultar(page - 1)}>
        Previous
      </Button>{" "}
      <Button variant="primary" onClick={() => handleConsultar(page + 1)}>
        Next
      </Button>
    </>
  );
};
