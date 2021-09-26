import styled from "styled-components"
import Image from 'next/image'

const Border = styled.div`
  padding: 5px;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  max-width: 178px;
  max-height: 178px;
`

export const Portrait = () => {
  return <Border>
    <Image src='/assets/img/Eduardo-Franco.png' width='178' height='178' alt='Foto de Perfil de Eduardo Franco' />
  </Border>
}