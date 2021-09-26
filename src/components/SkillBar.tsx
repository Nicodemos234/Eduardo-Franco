import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const SkillName = styled.h4`
  font-family: 'Roboto Condensed';
  font-size: 24px;
  color: ${({ theme }) => theme.colors.label};
`

const SkillProgress = styled.div`
  background-color: ${({ theme }) => theme.colors.label_dark};
  width: 100%;
  height: 27px;
  margin-top: 14px;
  margin-bottom: 28px;
`

export const SkillBar = ({name, total, className}: {name: string, total: number, className?: string}) => {
  return <Wrapper className={className}>
    <SkillName>
      {name}
    </SkillName>
    <SkillProgress />
  </Wrapper>
}