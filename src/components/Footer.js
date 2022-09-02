import React from 'react'
import { FaSpotify } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FooterContainer } from './Styles/Footer.styled'


const Footer = () => {
    return (
        <FooterContainer>
            <FaSpotify
            />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagramSquare />
        </FooterContainer>

    )
}

export default Footer