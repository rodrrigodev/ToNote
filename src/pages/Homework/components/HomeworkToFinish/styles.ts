import styled from 'styled-components'

interface HomeworkToFinishListProps {
  variant: 'finished' | 'notFinished'
}

export const HomeworkToFinishList = styled.div<HomeworkToFinishListProps>`
  margin-top: 2rem;
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 500;
  padding: 1.0625rem;
  background-color: ${(props) => props.theme.background};
  border: 1px solid
    ${(props) =>
      props.variant === 'finished'
        ? props.theme['blue-light']
        : props.theme['red-light']};
  border-radius: 6px;

  display: flex;
  align-items: center;

  button {
    padding: 0;
    line-height: 0;
    margin: 0;
    background-color: transparent;
    color: ${(props) => props.theme['red-dark']};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['red-light']};
      background-color: transparent;
    }
  }

  span:nth-child(1) {
    width: 25%;
  }

  span:nth-child(2) {
    width: 50%;
  }

  span:nth-child(3) {
    width: 25%;
  }

  @media (max-width: 610px) {
    span:nth-child(1) {
      width: 100%;
    }

    span:nth-child(2) {
      width: 100%;
      margin: 1rem 0;
    }

    span:nth-child(3) {
      width: 50%;
    }
  }
`
