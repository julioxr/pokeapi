import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/Global.styles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";

const theme = {
    colors: {
        primary: "#333",
        primary: "#f65a5b",
        secondary: "#204056",
        text: "#1B1D49",
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Header />
                <Nav />
                <Main />
            </>
        </ThemeProvider>
    );
}

export default App;
