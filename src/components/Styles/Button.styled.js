import styled from 'styled-components'

export const MyButton = styled.button`
color: #222831;
margin-left: 20px;
margin-top: 15px;
width: 115px;
height: 34px;
border-radius: 6px;
outline: none;
padding:10px;
border: none;
cursor: pointer;
:hover{
    cursor: pointer;
    background-color:#5C7A9D;
    transition: all 0.4s ease-in;
}

@media (min-width:200px) and (max-width:540px){
        width: 35%;
        padding: 10px;
        margin-left: 20px;
        height: auto;

    }

`

    ;