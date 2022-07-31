import { useContext } from "react";
import { StyledMain } from "./styles/Main.styles";
import { dataContext } from "../context/PokeProvider";
import Card from "./Card";

const Main = () => {
    const { dataPokemons } = useContext(dataContext);

    // https://pokeapi.co/api/v2/pokemon-species/1/ DE ACA VIENE LA DESCRIPCION flavor_text_entries INDICE 4

    return (
        <>
            <StyledMain>
                <div className="container">
                    {dataPokemons &&
                        dataPokemons.map(
                            ({ name, id, abilities, sprites, types }) => {
                                return (
                                    <Card
                                        name={name}
                                        key={id}
                                        abilities={abilities}
                                        sprites={sprites}
                                        types={types}
                                    />
                                );
                            }
                        )}
                </div>
            </StyledMain>
        </>
    );
};

export default Main;
