import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import {
  Container,
  Content,
  MainWrapper,
  PageTitle,
} from '../styles/styles'

const Portfolio: NextPage = () => {

  return (
    <MainWrapper>
       <Head>
        <title>Portfólio - Eduardo Franco</title>
      </Head>
      <Container>
        <Navbar />
        <Content>
          <PageTitle>
            Portfólio
          </PageTitle>
        </Content>
      </Container>
    </MainWrapper>
  )
}

export default Portfolio
