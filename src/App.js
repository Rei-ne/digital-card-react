import './App.css';
import { Wrapper } from './components/Styles/Wrapper.styled'
import { GlobalStyles } from './components/Styles/Global.styled'
import React from 'react'
import Footer from './components/Footer'
import Container from './components/Container'
import reine from './assets/reine.png'


function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <img src={reine} alt="header image" />
        {/* INFO */}
        <Container />



        <Footer />




      </Wrapper>
    </>


  );
}

export default App;
