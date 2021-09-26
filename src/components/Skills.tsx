import styled from "styled-components"
import { PageTitle, Wrapper } from "../styles/styles"
import { SkillBar } from "./SkillBar"

const SkillsWrapper = styled(Wrapper)`
  margin-left: 100px;
`

const SkillBarWMargin = styled(SkillBar)`
  margin-top: 82px;
`

const SectionTitle = styled.h4`
  font-family: 'Saira';
  font-size: 42px;
  color: ${({ theme }) => theme.colors.label};
  line-height: 87%;
  font-weight: bold;
  letter-spacing: -3%;
  margin-top: 26px;
`

const SectionSubTitle = styled.p`
  font-family: 'Saira';
  font-size: 20px;
  color: ${({ theme }) => theme.colors.label};
  line-height: 87%;
  letter-spacing: -3%;
  margin-top: 14px;
`

export const Skills = () => {
  return <SkillsWrapper>
    <PageTitle>
      Skills
    </PageTitle>
    <SkillBarWMargin name='Figma' total={0} />
    <SkillBar name='Adobe XD' total={0} />
    <SkillBar name='Photoshop' total={0} />
    <SectionTitle>
      Formação<br></br>
      Acadêmica
    </SectionTitle>
    <SectionSubTitle>
      User Experience & Design Thinking
    </SectionSubTitle>
  </SkillsWrapper>
}