import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import {
  Container,
  ContentHome,
  MainWrapper,
} from '../styles/styles'

const Contato: NextPage = () => {

  return (
    <MainWrapper>
      <Container>
        <Navbar />
        <ContentHome>
         Contato
        </ContentHome>
      </Container>
    </MainWrapper>
  )
}

export default Contato
