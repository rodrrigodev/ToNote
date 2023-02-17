import styled from 'styled-components'

export const HomeworkContainer = styled.main`
  max-width: 90rem;
  width: 90%;
  margin: 6.5rem auto 2rem auto;

  &::after {
    content: 'Obs: click em cima do tema do trabalho finalizado!';
    margin-top: 1rem;
    display: block;
  }
`

export const HomeworkDataAndLinksContainer = styled.div`
  margin-top: 3.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const SearchBoxContainer = styled.div`
  max-width: 50rem;
  width: 100%;
  display: flex;
  gap: 2rem;

  input {
    padding: 1rem;
    background-color: ${(props) => props.theme.black};
    font-size: 1.5rem;
    border: 0;
    border-radius: 6px;
    width: 100%;
    line-height: 1.75rem;
  }

  button {
    width: 30%;
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme['blue-light']};
    border: 1px solid ${(props) => props.theme['blue-light']};
    border-radius: 6px;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.75rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 500ms;

    &:hover {
      background-color: ${(props) => props.theme['blue-light']};
      color: ${(props) => props.theme.white};
      transition: all 500ms;
    }
  }
`

export const HomeworkDataContainer = styled.div`
  width: 70%;
  background-color: ${(props) => props.theme.black};
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 0.625rem 2.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;

    border: 1px solid transparent;
    border-radius: 6px;
    line-height: 1.75rem;
    transition: all 500ms;
    margin-bottom: 2rem;

    &:nth-child(1) {
      background-color: ${(props) => props.theme['blue-dark']};

      &:hover {
        background-color: ${(props) => props.theme['blue-light']};
      }
    }

    &:nth-child(2) {
      background-color: ${(props) => props.theme['red-dark']};

      &:hover {
        background-color: ${(props) => props.theme['red-light']};
      }
    }

    &:nth-child(3) {
      background-color: ${(props) => props.theme['green-dark']};

      &:hover {
        background-color: ${(props) => props.theme['green-light']};
      }
    }

    &:hover {
      background-color: ${(props) => props.theme['blue-light']};
      transition: all 500ms;
    }
  }
`

interface HomeworkToFinishProps {
  variant: 'finished' | 'notFinished'
}

export const HomeworkToFinish = styled.div<HomeworkToFinishProps>`
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
`

export const HomeworkLinksContainer = styled.aside`
  background-color: ${(props) => props.theme.black};
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    a {
      font-size: 1.5rem;
      line-height: 1.75rem;
      font-weight: 500;
      color: ${(props) => props.theme['black-light']};

      &:hover {
        color: ${(props) => props.theme.white};
      }
    }
  }
`
