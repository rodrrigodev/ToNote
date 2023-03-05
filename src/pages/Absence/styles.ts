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

export const TotalAbscence = styled.div`
  background-color: ${(props) => props.theme.black};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  position: relative;

  strong {
    display: initial;
    text-align: center;
  }

  div:not(:last-of-type) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 6px;
  }

  span {
    font-size: 1.5rem;
    line-height: 1.75rem;
    padding: 1.5rem 2.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['red-dark']};
  }
`

export const TotalAbscenceCount = styled.div`
  background-color: ${(props) => props.theme.black};
  border-radius: 6px;
  padding: 2rem 0;
  width: 11.0625rem;
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  left: 0;
  bottom: -6.7rem;

  span {
    background-color: transparent;
    padding: 0;

    &:first-of-type {
      color: ${(props) => props.theme['red-light']};
    }
  }
`
