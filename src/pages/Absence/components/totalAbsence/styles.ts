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

  span {
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.75rem;
    padding: 1.5rem 2.5rem;
    border-radius: 6px;

    &:nth-of-type(1) {
      display: none;

      @media (max-width: 768px) {
        display: block;
      }
    }
    @media (max-width: 768px) {
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 8rem;
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
export const TotalItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    background-color: ${(props) => props.theme['red-dark']};
    display: flex;
    flex-direction: column;
    border-radius: 6px;

    @media (max-width: 768px) {
      padding: 1rem 0;
      gap: 1rem;
    }
  }
`
