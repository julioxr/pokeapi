import React from "react";
import { StyleNav } from "./styles/Nav.styles";
// import Filter from "./Card";

const Filter = () => {
    return (
        <>
            <StyleNav>
                <h3>Filters: </h3>
                <ul>
                    <li className="red">All</li>
                    <li>Normal</li>
                    <li>Fighting</li>
                    <li>Flying</li>
                    <li>Posion</li>
                    <li>Ground</li>
                    <li>Rock</li>
                    <li>Bug</li>
                    <li>Ghost</li>
                    <li>Steel</li>
                    <li>Fire</li>
                    <li>Water</li>
                    <li>Grass</li>
                    <li>Electric</li>
                    <li>Psychic</li>
                    <li>Ice</li>
                    <li>Dragon</li>
                    <li>Dark</li>
                    <li>Fairy</li>
                    <li>Unknown</li>
                    <li>Shadow</li>
                    <li>🤍</li>
                </ul>
            </StyleNav>
        </>
    );
};

export default Filter;
