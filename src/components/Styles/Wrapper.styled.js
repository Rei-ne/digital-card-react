import styled from 'styled-components';
// singular div containing images and text
export const Wrapper = styled.section`
max-width: 317px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: center;
min-height: 98vh;
border-radius: 15px;

@media (min-width:250px) and (max-width:540px){

    max-width: 300px;

    img{
        max-height: 30vh;
        object-fit: cover;
    }
}


img{
    max-height: 40vh;
    width: 100%;
    border-radius: 15px 15px 0 0 ;
    margin: 0;
    padding: 0;
    object-fit: cover;


}


`;