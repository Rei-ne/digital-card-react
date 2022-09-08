import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body {
    background:#b5cae0;
    font-family: Inter, sans-serif;
    transition: all 0.50s linear;
    margin: 0;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;

}
a{
    text-decoration: none;
}
.github-btn{
    margin-top: 5px;
}
@media (min-width:200px) and (max-width:540px){
    .github-btn{
    margin-left: 35px;
}

    }



.faGithub{

        margin-right:7px;

    }
`;