import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PokeProvider from "./context/PokeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <PokeProvider>
        <App />
    </PokeProvider>
    // </React.StrictMode>
);
