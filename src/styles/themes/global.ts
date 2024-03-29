import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-light']};
}
body{
    background-color: ${(porps) => porps.theme.background};
    color: ${(porps) => porps.theme.white};
    -webkit-font-smoothing: antialiased;
    overflow-y: scroll;
}

body, input, textarea, button, a{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #fff;
}

a{
    text-decoration: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

@media (max-width: 1024px){
    html{
        font-size: 80.5%;
    }
}

`
