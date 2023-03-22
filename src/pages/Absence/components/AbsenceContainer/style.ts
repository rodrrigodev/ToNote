import styled from 'styled-components'

export const IncreseAndDecrease = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  display: flex;
  gap: 0.5rem;
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
    width: 30%;
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

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media (max-width: 420px) {
    flex-direction: column;
    gap: 1rem;
  }

  button {
    @media (max-width: 420px) {
      width: 80%;
    }
  }
`
export const PlusAndMinusBtn = styled.button`
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme['blue-light']};
  cursor: pointer;
  transition: all 500ms;

  &:disabled {
    color: ${(props) => props.theme.disabled};
  }

  &:hover:not(:disabled) {
    color: ${(props) => props.theme['blue-dark']};
    transition: all 500ms;
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
