import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { useLights, Lights } from '../context/LightsContext'
import { useRouter } from 'next/dist/client/router'

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 32px;
`

const MenuLink = styled.a<{ light?: Lights, active: boolean, isHome: boolean }>`
  text-decoration: none;
  color: ${({ theme, light, active, isHome }) =>
    isHome && light == Lights.Dark ?
      theme.colors.label_darker :
      active ? theme.colors.primary :
        isHome ? theme.colors.label_dark :
          theme.colors.label};
  margin: 0px 20px;
  text-transform: uppercase;
  font-family: 'Nunito';
  font-weight: bold;
  font-size: 18px;
`
export const Navbar = () => {
  const router = useRouter()
  const { light } = useLights()

  return (
    <Nav>
      <Image
        src={light === Lights.Dark ? '/assets/img/eduardo_franco_darker.svg'
          : router.pathname === "/" ? '/assets/img/eduardo_franco_dark.svg'
            : '/assets/img/eduardo_franco_light.svg'}
        alt="Logo Eduardo Franco"
        width="167"
        height="65"
      />
      <div>
        <Link href='/' passHref>
          <MenuLink
            light={light}
            isHome={router.pathname === "/"}
            active={router.pathname === "/"}
          >
            Home
          </MenuLink>
        </Link>
        <Link href='/sobre' passHref>
          <MenuLink
            light={light}
            isHome={router.pathname === "/"}
            active={router.pathname === "/sobre"}
          >
            Sobre mim
          </MenuLink>
        </Link>
        <Link href='/portfolio' passHref>
          <MenuLink
            light={light}
            isHome={router.pathname === "/"}
            active={router.pathname === "/portfolio"}
          >
            Portfólio
          </MenuLink>
        </Link>
        <Link href='/contato' passHref>
          <MenuLink
            light={light}
            isHome={router.pathname === "/"}
            active={router.pathname === "/contato"}
          >
            Contato
          </MenuLink>
        </Link>
      </div>
    </Nav>
  )
}