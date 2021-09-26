import Head from 'next/head'
import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import {
  Container,
  Content,
  MainWrapper,
  PageTitle,
} from '../styles/styles'

const Contato: NextPage = () => {

  return (
    <MainWrapper>
      <Head>
        <title>Contato - Eduardo Franco</title>
      </Head>
      <Container>
        <Navbar />
        <Content>
          <PageTitle>
            Contato
          </PageTitle>
        </Content>
      </Container>
    </MainWrapper>
  )
}

export default Contato
