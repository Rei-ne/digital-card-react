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
                <h3>Frontend Developer</h3>
            </div>
            {/* link buttons */}
            <div>
                <a href="#" >
                    <MyButton> Resume
                    </MyButton>
                </a>
                <a href="https://github.com/Rei-ne" target="_blank">
                    <MyButton>
                        <FaGithubSquare />
                        Github
                    </MyButton>
                </a>

            </div>
            {/* about */}

            <h2>About me</h2>
            <p>I am a frontend developer interested in blockchain technologies, user experience design and software engineering.
                <br /> I’m currently learning how to be a  fullstack blockchain software engineer, and I look forward to building world class applications that would impact the world</p>


            {/* interests */}

            <h2>My interests</h2>
            <p>I love art, music, and watching TV shows.
                <br />When i'm not coding, i'm listening to music or hanging out with my friends and listening to music with them <span>😀 </span> </p>


        </StlyedContainer>
    )
}

export default Container