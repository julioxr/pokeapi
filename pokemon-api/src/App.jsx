import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/Global.styles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";

const theme = {
    colors: {
        primary: "#f65a5b",
        secondary: "#204056",
        text: "#1B1D49",
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Nav />
            <Main />
            {/* <input type="text" />
            <button>Enviar</button>
            <p>
                Tarea 1 <span>EDITAR</span>
            </p>
            <p>
                Tarea 2 <span>EDITAR</span>
            </p> */}
        </ThemeProvider>
    );
}

export default App;
