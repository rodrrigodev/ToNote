import styled from 'styled-components'

export const TotalAbscence = styled.div`
  background-color: ${(props) => props.theme.black};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  position: relative;

  strong {
    display: flex;
    justify-content: center;
  }

  div:not(:last-of-type) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 6px;
  }

  span {
    text-align: center;
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
  width: 100%;

  span {
    background-color: transparent;
    padding: 0;

    &:first-of-type {
      color: ${(props) => props.theme['red-light']};
    }
  }
`
