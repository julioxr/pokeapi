import { useContext } from "react";
import { StyleNav } from "./styles/Nav.styles";
import { dataContext } from "../context/PokeProvider";
import Li from "./Li";
import {
    AiFillHeart,
    AiFillLeftCircle,
    AiFillRightCircle,
} from "react-icons/ai";
import Option from "./Option";
// import Filter from "./Card";

const Filter = () => {
    const { typesOfPokemons } = useContext(dataContext);
    return (
        <>
            <StyleNav>
                <h3>Filters: </h3>
                <select name={name} id="">
                    <option value="">All</option>
                    {typesOfPokemons &&
                        typesOfPokemons.map(({ url, name }) => {
                            return <Option type={name} key={name} url={url} />;
                        })}
                </select>
                <ul>
                    <li className="red">All</li>

                    {typesOfPokemons &&
                        typesOfPokemons.map(({ url, name }) => {
                            return <Li type={name} key={name} url={url} />;
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
