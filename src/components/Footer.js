import React from 'react'
import { FaSpotify } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FooterContainer } from './Styles/Footer.styled'


const Footer = () => {
    return (
        <FooterContainer>
            <a href="https://github.com/Rei-ne" target="_blank">
                <FaSpotify className='footer-ico'
                />
            </a>
            <a href="https://github.com/Rei-ne" target="_blank">
                <FaTwitter className='footer-ico' />
            </a>

            <a href="https://github.com/Rei-ne" target="_blank">
                <FaLinkedin className='footer-ico' />
            </a>
            <a href="https://github.com/Rei-ne" target="_blank">
                <FaInstagramSquare className='footer-ico' />
            </a>
        </FooterContainer>

    )
}

export default Footer