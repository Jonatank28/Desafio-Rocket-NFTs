import React from 'react'
import '../src/Components/Layout/Global/Global.css'
import Container from './Components/Layout/Container/Container'
import ContainerPreto from './Components/Layout/Container/ContainerPreto'
import ContainerImagem from './Components/Layout/Container/ContainerImagem'
import ContainerFooter from './Components/Layout/Container/ContainerFooter'
import Nav from './Components/Layout/Nav/Nav'
import Section1 from './Components/Layout/Section1/Section1'
import Section2 from './Components/Layout/Section2/Section2'
import Section3 from './Components/Layout/Section3/Section3'
import Section4 from './Components/Layout/Section4/Section4'
import Section5 from './Components/Layout/Section5/Section5'
import Footer from './Components/Layout/Footer/Footer'

function App() {
  return (
    <> 
      <ContainerImagem>
        <Container>
          <Nav/>
          <Section1/>
          <Section2/>
        </Container>
      </ContainerImagem>
      <ContainerPreto>
        <Section3/>
        <Container>
          <Section4/>
          <Section5/>
        </Container>
      </ContainerPreto>
      <ContainerFooter>
        <Container>
          <Footer/>
        </Container>
      </ContainerFooter>
    </>
  )
}

export default App
