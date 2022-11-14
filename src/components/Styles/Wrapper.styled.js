import styled from 'styled-components';
// singular div containing images and text
export const Wrapper = styled.section`
max-width: 317px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: center;
height:600px;
border-radius: 15px;
margin: 10px 0;
padding: 10px 0;


@media (min-width:250px) and (max-width:540px){
    height:630px;
    max-width: 310px;
    border-radius: 15px 15px 0 0 ;
    img{
        height: 150px;
        object-fit: cover;
        margin-top: 2px;
    }
}


img{

    height: 220px;
    width: 100%;
    border-radius: 15px 15px 0 0 ;
    margin-top: 20px;

    padding: 0;
    object-fit: cover;


}


`;