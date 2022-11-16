import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body,
    html,
    #root {
        width: 100%;
        height: 100%;
    }

    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        width: fit-content;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    a,
    a:hover {
        color: inherit;
    }
`;
