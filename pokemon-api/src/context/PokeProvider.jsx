import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

const PokeProvider = ({ children }) => {
    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12";

    const [dataPokemons, setDataPokemons] = useState([]);

    const getListPokemons = async () => {
        const fetchListPokemons = await fetch(url);
        const resListPokemons = await fetchListPokemons.json();

        const allDataPokemons = await Promise.all(
            resListPokemons.results.map(async (poke) => {
                // SEGUNDA PETICION POR CADA VUELTA DEL ARRAY
                return await getPokemonsData(poke.url);
            })
        );

        setDataPokemons(allDataPokemons);
        console.log(allDataPokemons);
    };

    // 2do FETCH, PROCESA LA DATA Y RETORNA UN OBJETO POKEMON A allDataPokemons
    const getPokemonsData = async (url) => {
        const fetchDataPokemons = await fetch(url);
        const resPokemons = await fetchDataPokemons.json();
        return resPokemons;
    };

    useEffect(() => {
        getListPokemons();
    }, []);

    return (
        <dataContext.Provider value={{ dataPokemons }}>
            {children}
        </dataContext.Provider>
    );
};

export default PokeProvider;
