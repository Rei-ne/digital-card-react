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
    letter-spacing: 0.08rem;
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
${'' /* about and interests heading */}
h2{
    text-align: left;
    padding: 0px 10px;
    margin-bottom: 2px;
    font-size: 14.24px;


}
p{
    font-size: 10.54px;
    font-weight: 400;
    margin-top: 0;
    line-height: 18px;
    text-align: left;
    padding: 0px 10px;
    margin-bottom: 2px;
    max-width: 90%;
    color: #222831;
    word-wrap: break-word;

}
.textDiv {
    margin-left: 9px;
}
.buttonDiv{
    display:flex;
    align-items: center;
    justify-content: center;
}

@media (min-width: 768px) {
    p{
        font-size: 11.24px;

    }
    .textDiv{
        margin-left: 8px;



    }
    h2{
        font-size: 15.24px;
    }
}
@media (max-width: 768px) {
    h2{
        font-size: 15.24px;
    }
    p{
        font-size: 14px;
        line-height: 18px;

    }
    .textDiv{
        margin: 0;


    }
}
`;