import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        body {
    overflow-x: hidden; /* Esconde o scroll lateral */
}
    }
`;

export default GlobalStyles;
