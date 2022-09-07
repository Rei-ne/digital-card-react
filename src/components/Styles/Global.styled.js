import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body {
    background:#b5cae0;
    font-family: Inter, sans-serif;
    transition: all 0.50s linear;
margin: 0;
padding: 10px 0;

}
.github-btn{
    margin-top: 5px;
}
@media (min-width:200px) and (max-width:540px){
    .github-btn{
    margin-left: 35px;
}

    }

.github-btn:hover{
    cursor: pointer;
    background-color:#5C7A9D;
    transition: all 0.4s ease-in;
}

.faGithub{
        margin-right:7px;

    }
`;