import React from "react";
import { StyledCard } from "./styles/Card.styles";

const Card = () => {
    return (
        <>
            <StyledCard>
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                    alt=""
                />
                <div>
                    <h2>Bulbasaur</h2>
                    <p className="description">
                        The seed on its back is filled with nutrients. The seed
                        grows steadily larger as its body grows
                    </p>
                    <section>
                        <h3>Ability</h3>
                        <div className="data-pokemon">
                            <p>Overgrow</p>
                            <p>Chlorophyll</p>
                        </div>
                    </section>
                    <section>
                        <h3>Type</h3>
                        <div className="data-pokemon">
                            <p>Grass</p>
                            <p>Poison</p>
                        </div>
                    </section>
                </div>
            </StyledCard>
        </>
    );
};

export default Card;
