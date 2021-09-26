import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import {
  Container,
  ContentHome,
  MainWrapper,
} from '../styles/styles'

const Sobre: NextPage = () => {
  return (
    <MainWrapper>
      <Container>
        <Navbar />
        <ContentHome>
          Sobre
        </ContentHome>
      </Container>
    </MainWrapper>
  )
}

export default Sobre
