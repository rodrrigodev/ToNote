import styled from 'styled-components'
import { MainContainerBase } from '../Home/styles'

export const AbscenceContainer = styled(MainContainerBase)`
  display: flex;
  justify-content: space-between;
  gap: 3.75rem;

  strong {
    font-size: 1.5rem;
    line-height: 1.75rem;
    margin-bottom: 1.5rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const AbscenceIncreseDecrease = styled.div`
  background-color: ${(props) => props.theme.black};
  padding: 2.5rem;
  border-radius: 6px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
