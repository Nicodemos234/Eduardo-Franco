import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { ButtonLamp } from '../components/ButtonLamp'
import { Navbar } from '../components/Navbar'
import { useLights, Lights } from '../context/LightsContext'
import {
  ButtonDark,
  Container,
  ContentHome,
  DotWrapper,
  ImageWrapper,
  MainWrapper,
  Subtitle,
  Title
} from '../styles/styles'

const DarkerWrapper = styled(MainWrapper) <{ light?: Lights }>`
  background-color: ${({ theme, light }) =>
    light === Lights.Light ?
      theme.colors.background_light :
      theme.colors.background_darker};
`

const Home: NextPage = () => {
  const { light, setLight } = useLights()


  const handleUpdateLight = () => {
    setLight(light === Lights.Dark ? Lights.Light : Lights.Dark)
  }

  return (
    <DarkerWrapper light={light}>
      <Head>
        <title>Eduardo Franco - UI/UX Designer</title>
      </Head>
      <Container>
        <Navbar />
        <ContentHome>
          <div>
            <Title light={light}>
              Eduardo<br></br>
              Franco
              <DotWrapper>
                <Image
                  src={light === Lights.Dark ? '/assets/img/dot_dark.svg'
                    : '/assets/img/dot_light.svg'}
                  width="24"
                  height="24"
                  alt="Lampada"
                />
              </DotWrapper>
            </Title>
            <Subtitle light={light}>
              UI/UX Designer
            </Subtitle>
            <Link href={light === Lights.Dark ? '#' : 'sobre'} passHref>
              <ButtonDark light={light}>
                Sobre mim
              </ButtonDark>
            </Link>
          </div>
          <ImageWrapper>
            <ButtonLamp onClick={handleUpdateLight} />
            <Image
              src={light === Lights.Light ?
                '/assets/img/computador_light.svg' :
                '/assets/img/computador_dark.svg'}
              alt="Notebook pouco iluminado"
              width={light === Lights.Light ? 374 : 664}
              height={light === Lights.Light ? 229 : 277}
            />
          </ImageWrapper>
        </ContentHome>
      </Container>
    </DarkerWrapper>
  )
}

export default Home
