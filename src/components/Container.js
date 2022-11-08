import React from 'react'
import { StlyedContainer } from './Styles/Container.styled'
import { FaGithubSquare } from "react-icons/fa";
import { MyButton } from './Styles/Button.styled'

const Container = () => {
    return (
        <StlyedContainer>
            {/* name */}
            <div>
                <h1>Toyosi Odukale</h1>
                <h3>Software Developer</h3>
            </div>
            {/* link buttons */}

            {/* <a href="#" >
                <MyButton> Resume
                </MyButton>
            </a> */}
            <div className="buttonDiv">
                <a href="https://github.com/Rei-ne" target="_blank">
                    <MyButton className='github-btn'>
                        <FaGithubSquare className='faGithub' />
                        Github
                    </MyButton>
                </a>
            </div>



            {/* about */}
            <div className='textDiv'>


                <h2>About me</h2>
                <p>I am Toyosi/TY, a software developer interested in blockchain technologies, user experience design and software engineering.
                    {/* <br /> I look forward to building amazing, user friendly,
                    <br />scalable applications that would impact the world! */}</p>


                {/* interests */}

                <h2>My interests</h2>
                <p>I love art, music, watching football and playing video games.
                    <br />When i'm not coding, i'm listening to music or hanging out with my friends and listening to music with them <span>😀 </span> </p>

            </div>

        </StlyedContainer>
    )
}

export default Container