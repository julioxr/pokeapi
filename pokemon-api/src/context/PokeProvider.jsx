import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

const PokeProvider = ({ children }) => {
    const urlLimit = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150";

    const [dataPokemons, setDataPokemons] = useState([]);
    const [typesOfPokemons, setTypesOfPokemons] = useState([]);

    const getListPokemons = async () => {
        const fetchListPokemons = await fetch(urlLimit);
        const resListPokemons = await fetchListPokemons.json();

        // POR CADA LINK HACE UN MAP QUE LLAMA UNA FUNCION QUE HACE FETCH Y DEVUELVE MUCHAS PROMESAS
        const allDataPokemons = await Promise.all(
            resListPokemons.results.map(async (poke) => {
                // SEGUNDA PETICION POR CADA VUELTA DEL ARRAY
                return await getPokemonsData(poke.url);
            })
        );

        setDataPokemons(allDataPokemons);
    };

    // 2do FETCH, PROCESA LA DATA Y RETORNA UN OBJETO POKEMON A allDataPokemons
    const getPokemonsData = async (url) => {
        const fetchDataPokemons = await fetch(url);
        const resPokemons = await fetchDataPokemons.json();
        return resPokemons;
    };

    // HACE EL FETCH AL API PARA OBTENER LOS TYPES DE LOS POKEMONS
    const getTypesOfPokemons = async () => {
        const urlType = "https://pokeapi.co/api/v2/type/";
        const fetchTypesOfPokemons = await fetch(urlType);
        const resTypesOfPokemons = await fetchTypesOfPokemons.json();
        setTypesOfPokemons(resTypesOfPokemons.results);
    };

    // https://pokeapi.co/api/v2/type/7/
    // De esta url tengo que traer para filtrar los pokemones

    useEffect(() => {
        getListPokemons();
        getTypesOfPokemons();
    }, []);

    return (
        <dataContext.Provider value={{ dataPokemons, typesOfPokemons }}>
            {children}
        </dataContext.Provider>
    );
};

export default PokeProvider;
