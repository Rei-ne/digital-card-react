import React from 'react'
import { FaSpotify } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FooterContainer } from './Styles/Footer.styled'


const Footer = () => {
    return (
        <FooterContainer>
            <a href="https://open.spotify.com/user/31iptodfoldd453eq6tbmv4x6qlu" target="_blank">
                <FaSpotify className='footer-ico'
                />
            </a>
            <a href="https://twitter.com/Reine_Dev" >
                <FaTwitter className='footer-ico' />
            </a>

            <a href="https://www.linkedin.com/in/toyosi-odukale/" target="_blank">
                <FaLinkedin className='footer-ico' />
            </a>
            <a href="https://www.instagram.com/reine_dev/">
                <FaInstagramSquare className='footer-ico' />
            </a>
        </FooterContainer>

    )
}

export default Footer