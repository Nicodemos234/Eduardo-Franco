import Head from 'next/head'
import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import { Skills } from '../components/Skills'
import { WhoAmI } from '../components/WhoAmI'
import {
  Container,
  Content,
  MainWrapper,
  PageTitle,
} from '../styles/styles'

const Sobre: NextPage = () => {
  return (
    <MainWrapper>
      <Head>
        <title>Sobre mim - Eduardo Franco</title>
      </Head>
      <Container>
        <Navbar />
        <Content>
          <WhoAmI />
          <Skills />
        </Content>
      </Container>
    </MainWrapper>
  )
}

export default Sobre
