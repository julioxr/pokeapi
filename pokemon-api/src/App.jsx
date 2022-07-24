import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/Global.styles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import styled from "styled-components";

const theme = {
    colors: {
        primary: "#f65a5b",
        secondary: "#204056",
        text: "#1B1D49",
    },
};

const StylesApp = styled.div`
    background-color: red;
    width: 1520px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            {/* <StylesApp> */}
            <GlobalStyle />
            <Header />
            <Nav />
            <Main />
            {/* </StylesApp> */}
        </ThemeProvider>
    );
}

export default App;
