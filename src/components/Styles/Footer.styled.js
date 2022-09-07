import styled from 'styled-components'

export const FooterContainer = styled.footer`
width: 317px;
height: 55px;
display: flex;
align-items: center;
justify-content: center;
gap: 24px;
background: #5c7a9d;
border-radius: 0px 0px 10px 10px;
border-top: 0.8px solid #222831;

a{
    text-decoration: none;
    color: black;
}
a:hover{
   color: #222831;
}
@media (min-width:200px) and (max-width:540px){

   max-width: 100%;


}

`;