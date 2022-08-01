import { StyledCard } from "./styles/Card.styles";
import { AiFillHeart } from "react-icons/ai";

const Card = ({ name, abilities, sprites, types }) => {
    const capsName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <>
            <StyledCard>
                <figure className="pokemon">
                    <img
                        src={sprites.other.dream_world.front_default}
                        alt={name}
                    />
                </figure>
                <div className="text">
                    <h2>{capsName}</h2>
                    <p className="description">
                        The seed on its back is filled with nutrients. The seed
                        grows steadily larger as its body grows
                    </p>
                    <div className="caracteristics">
                        <section>
                            <h3>Ability</h3>
                            <div className="data-pokemon">
                                {abilities.map((ability) => {
                                    return (
                                        <p
                                            className="ability"
                                            key={ability.ability.name}
                                        >
                                            {ability.ability.name
                                                .charAt(0)
                                                .toUpperCase() +
                                                ability.ability.name.slice(1)}
                                        </p>
                                    );
                                })}
                            </div>
                        </section>
                        <section>
                            <h3>Type</h3>
                            <div className="data-pokemon">
                                {types.map((type) => {
                                    return (
                                        <p
                                            className="type"
                                            key={type.type.name}
                                        >
                                            {type.type.name
                                                .charAt(0)
                                                .toUpperCase() +
                                                type.type.name.slice(1)}
                                        </p>
                                    );
                                })}
                            </div>
                        </section>
                    </div>
                </div>
                <span>
                    <AiFillHeart />
                </span>
            </StyledCard>
        </>
    );
};

export default Card;
