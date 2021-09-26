import Image from 'next/image'
import styled from 'styled-components'
import { useLights, Lights } from '../context/LightsContext'

const Button = styled.button<{ light?: Lights }>`
  border: 2px solid ${({ theme, light }) =>
    light === Lights.Light ?
      theme.colors.label_darker :
      theme.colors.label};
  border-radius: 8px;
  width: 60px;
  height: 60px;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  right: 100px;
  top: 0;
  z-index: 2;
`

export const ButtonLamp = ({ onClick }: { onClick?: () => void }) => {
  const { light } = useLights()

  return <Button onClick={onClick} light={light} >
    <Image
      src={light === Lights.Dark ? '/assets/img/lampada_light.svg'
        : '/assets/img/lampada_dark.svg'}
      width="21"
      height="38"
      alt="Lampada"
    />
  </Button>
}