import styled from "styled-components"
import { PageTitle, Wrapper } from "../styles/styles"
import { Portrait } from "./Portrait"

const Row = styled.div`
  display: flex; 
  margin-top: 75px;
`

const TextContainer = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  text-align: justify;
  margin-left: 6px;
  line-height: 28px;
`


export const WhoAmI = () => {
  return <Wrapper>
    <PageTitle>
      Quem sou
    </PageTitle>
    <Row>
      <Portrait />
      <TextContainer style={{maxWidth: 232}}>
        Ac urna ac mi hendrerit. Imperdiet in amet dignissim faucibus turpis massa, laoreet viverra et. Lorem feugiat adipiscing
      </TextContainer>
    </Row>
    <TextContainer>
      Sed sed scelerisque faucibus volutpat, platea vitae massa ut pellentesque. Adipiscing nisi, mi, a orci. Ullamcorper non, condimentum pharetra egestas fermentum lectus cras pretium. Facilisis magna dolor dui aliquam adipiscing adipiscing accumsan. Tempus parturient faucibus velit duis pellentesque nullam. At praesent varius et est, et sagittis, dictum nunc sollicitudin. Molestie nunc senectus arcu, nascetur nam egestas. Dui massa sodales dolor quisque.
    </TextContainer>
  </Wrapper>
}