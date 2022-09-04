import styled from 'styled-components'
// text container

export const StlyedContainer = styled.div`
max-width: 100%;
padding: 10px;
background:linear-gradient( #84acd6, #5C7A9D);



${'' /* name */}
h1{
    text-align: center;

    margin: 0;
    letter-spacing: 0.1rem;
    font-size: 25px;
    padding: 5px;
}

${'' /* frontend developer */}
h3{
    text-align: center;
    color: #222831;
    margin: 0;
    padding: 0;
    font-size: 12.8px;
    padding: 3px;
    margin-bottom: 4px;

}
h2{
    text-align: left;
    padding: 0px 10px;
    margin-bottom: 0;
    font-size: 18.24px;


}
p{
    font-size: 10.24px;
    font-weight: 400;
    margin-top: 0;
    line-height: 13px;
    text-align: left;
    padding: 0px 10px;
    margin-bottom: 2px;
    width: 90%;
    color: #222831;


word-wrap: break-word;
}
@media (min-width: 768px) {
    p{
        font-size: 13.24px;
    }
}
`;