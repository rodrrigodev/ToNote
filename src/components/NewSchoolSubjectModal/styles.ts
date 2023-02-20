import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.black};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.375rem;
    margin-bottom: 1rem;
  }

  input {
    background-color: ${(props) => props.theme.background};
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.75rem;
    padding: 1rem;
    border-radius: 6px;
    border: 0;

    &::placeholder {
      color: ${(props) => props.theme.white};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    div {
      display: flex;
      gap: 1.25rem;
    }

    button {
      align-self: center;
      width: 40%;
      border: 1px solid ${(props) => props.theme['green-light']};
      color: ${(props) => props.theme['green-light']};
      padding: 1rem 0;
      background-color: transparent;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 1.75rem;
      transition: all 500ms;

      &:hover {
        background-color: ${(props) => props.theme['green-light']};
        color: ${(props) => props.theme.white};
        transition: all 500ms;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  right: 1.75rem;
  top: 1.75rem;
  background-color: transparent;
  border: 0;
`
