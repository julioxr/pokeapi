import React from "react";
import { StyledCard } from "./styles/Card.styles";

const Card = () => {
    return (
        <>
            <StyledCard>
                <div className="pokemon">
                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                        alt=""
                    />
                </div>
                <div className="text">
                    <h2>Bulbasaur</h2>
                    <p className="description">
                        The seed on its back is filled with nutrients. The seed
                        grows steadily larger as its body grows
                    </p>
                    <div className="caracteristics">
                        <section>
                            <h3>Ability</h3>
                            <div className="data-pokemon">
                                <p className="ability">Overgrow</p>
                                <p className="ability">Chlorophyll</p>
                            </div>
                        </section>
                        <section>
                            <h3>Type</h3>
                            <div className="data-pokemon">
                                <p className="type">Grass</p>
                                <p className="type">Poison</p>
                            </div>
                        </section>
                    </div>
                </div>
                <span>❤</span>
            </StyledCard>
        </>
    );
};

export default Card;
