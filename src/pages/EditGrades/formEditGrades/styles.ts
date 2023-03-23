import styled from 'styled-components'

export const SchoolGradesToEdit = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 1.0625rem 1.5rem;
  border-radius: 6px;

  display: flex;
  justify-content: space-between;

  div {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 834px) {
      flex-direction: column;
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  span {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: ${(props) => props.theme.black};
    width: 8rem;
  }

  input {
    width: 20%;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.background};
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.75rem;
    border-radius: 6px;
    border: 0;

    &::placeholder {
      color: ${(props) => props.theme.white};
    }

    @media (max-width: 834px) {
      width: 100%;
    }
  }

  @media (max-width: 834px) {
    flex-wrap: wrap;
  }
`
export const DeleteGradeBtn = styled.button`
  border: 0;
  line-height: 0;
  margin: 0;
  background-color: transparent;
  color: ${(props) => props.theme['red-dark']};
  cursor: pointer;
  transition: all 500ms;

  &:hover {
    color: ${(props) => props.theme['red-light']};
    transition: all 500ms;
  }

  @media (max-width: 834px) {
    width: 30%;
    display: flex;
    align-items: center;
  }
`

export const UpdateBtn = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme['blue-dark']};
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.75rem;
  border-radius: 6px;
  border: 0;
  transition: all 500ms;
  width: 8rem;

  &:hover {
    background-color: ${(props) => props.theme['blue-light']};
    transition: all 500ms;
  }
`

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme['red-light']};
  margin-top: 0.5rem;
`
