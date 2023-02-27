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

export const IncreseAndDecrease = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1.0625rem;
  border-radius: 6px;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  span {
    color: ${(props) => props.theme.black};
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.4375rem;
    width: 7rem;
  }

  div button {
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme['blue-light']};
    cursor: pointer;
    transition: all 500ms;

    &:hover {
      color: ${(props) => props.theme['blue-dark']};
      transition: all 500ms;
    }
  }

  input {
    font-size: 1.5rem;
    line-height: 1.75rem;
    background-color: ${(props) => props.theme['black-light']};
    color: ${(props) => props.theme.white};
    text-align: center;
    border: 0;
    border-radius: 6px;
    height: 3rem;
    width: 4.6875rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.875rem;
  }
`

export const AddBtn = styled.button`
  padding: 0 1.5rem;
  height: 3rem;
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme['blue-light']};
  cursor: pointer;
  transition: all 500ms;

  &:hover {
    background-color: ${(props) => props.theme['blue-dark']};
    transition: all 500ms;
  }
`

export const TotalAbscence = styled.div`
  background-color: ${(props) => props.theme.black};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  strong {
    display: initial;
    text-align: center;
  }

  div {
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
`
