import { useContext } from "react";
import { StyleNav } from "./styles/Nav.styles";
import { dataContext } from "../context/PokeProvider";
import Li from "./Li";
import {
    AiFillHeart,
    AiFillLeftCircle,
    AiFillRightCircle,
} from "react-icons/ai";
import Select from "react-select";
// import Filter from "./Card";

const Filter = () => {
    const { typesOfPokemons, getOptionPokemons } = useContext(dataContext);

    // Con este map lleno las opciones del form
    const pokemonTypeOptions = typesOfPokemons.map(({ url, name }) => {
        return { value: url, label: name };
    });

    const handleSelectChange = (e) => {
        getOptionPokemons(e.value); // el value es la url
    };

    return (
        <>
            <StyleNav>
                <h3>Filters: </h3>
                <div className="select">
                    <Select
                        options={pokemonTypeOptions}
                        defaultValue={{ value: "All", label: "All" }}
                        onChange={(e) => handleSelectChange(e)}
                        isClearable
                    />
                </div>
                <ul>
                    <li className="red">All</li>

                    {typesOfPokemons &&
                        typesOfPokemons.map(({ url, name }) => {
                            return <Li type={name} key={name} url={name} />;
                        })}
                    <li>
                        <AiFillHeart />
                    </li>
                </ul>
                <div className="paginator">
                    <AiFillLeftCircle />
                    <p>1 de 10</p>
                    <AiFillRightCircle />
                </div>
            </StyleNav>
        </>
    );
};

export default Filter;
