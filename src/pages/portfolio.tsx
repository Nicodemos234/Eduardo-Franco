import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import {
  Container,
  ContentHome,
  MainWrapper,
} from '../styles/styles'

const Portfolio: NextPage = () => {

  return (
    <MainWrapper>
      <Container>
        <Navbar />
        <ContentHome>
         Portfolio
        </ContentHome>
      </Container>
    </MainWrapper>
  )
}

export default Portfolio
