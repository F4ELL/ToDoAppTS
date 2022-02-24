import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Barlow', sans-serif;
    }

    body{
        width: 100%;
        height: 100vh;
    }

    html{
        background-color: #E5E5E5;
    }

    .container{
        background-color: #E5E5E5;
        width: 100%;
        max-width: 700px;
        margin: 250px auto 0 auto;
    }

    .input-bar{
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    .container-list{
        width: 100%;
        display: flex;
        justify-content: center;
    }
`