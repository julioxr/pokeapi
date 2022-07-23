import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import { Formik, Form, Field } from "formik";

const Header = () => {
    return (
        <>
            <StyledHeader>
                <div className="menu">
                    <div>
                        <img
                            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
                            alt="logo"
                        />
                    </div>

                    <Formik>
                        <Form>
                            <Field
                                placeholder={"Pokemon's name"}
                                textAlign={"center"}
                            ></Field>
                        </Form>
                    </Formik>
                </div>
            </StyledHeader>
        </>
    );
};

export default Header;
