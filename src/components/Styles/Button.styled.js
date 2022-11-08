import styled from 'styled-components'

export const MyButton = styled.button`
color: #222831;
margin: 10px;
width: 190px;
height: 34px;
border-radius: 8px;
outline: none;
padding:7px;
border: 0.8px solid #84acd6;
background-color: inherit;
:hover{
    cursor: pointer;
    background-color: #b5cae0;
    transition: all 0.8s ease-in;
}
    @media (min-width:200px) and (max-width:540px){

        padding: 10px;

        height: auto;

    }

`

    ;