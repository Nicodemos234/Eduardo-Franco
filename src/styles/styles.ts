import styled, { css } from "styled-components"
import { Lights } from "../context/LightsContext"

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1169px;
`

export const ContentHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100%;
`

export const Title = styled.h1<{ light?: Lights }>`
  color: ${({ theme, light }) =>
    light === Lights.Dark ?
      theme.colors.label_darker :
      theme.colors.label_dark};
  font-family: Rubik;
  font-weight: bold;
  line-height: 74%;
  letter-spacing: -5%;
  font-size: 97px;
`

export const Subtitle = styled.h2<{ light?: Lights }>`
  color: ${({ theme, light }) =>
    light === Lights.Dark &&
    theme.colors.label_darker};
  ${({ light }) => light === Lights.Light && css`
      background: -webkit-linear-gradient(30deg, #EF6302, #FF9B55);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; 
    `
  }
  font-family: Rubik;
  font-size: 42px;
  letter-spacing: -5%;
  padding-left: 4px;
  line-height: 60px;
`


export const ButtonDark = styled.a<{ light?: Lights }>`
  display: block;
  color: ${({ theme, light }) =>
    light === Lights.Dark ?
      theme.colors.label_darker :
      theme.colors.label_dark};
  background-color: transparent;
  font-family: 'Nunito';
  text-align: center;
  padding: 14px;
  width: 270px;
  border: 2px solid ${({ theme, light }) =>
    light === Lights.Dark ?
      theme.colors.label_darker :
      theme.colors.label_dark};
  border-radius: 4px;
  text-transform: uppercase;
  margin-top: 8px;
  text-decoration: none;
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 664px;
  height: 277px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const DotWrapper = styled.span`
  display: inline-block;
  & > div:first-of-type {
    margin-bottom: -4px !important;
  }
`