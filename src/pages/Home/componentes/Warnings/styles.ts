import styled from 'styled-components'

export const WarningsContainer = styled.div`
  background-color: ${(props) => props.theme.black};
  padding: 2.5rem;
  border-radius: 6px;
  width: 40%;
  align-self: flex-start;

  strong {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.75rem;
    margin-bottom: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`

interface WarningItensProps {
  variant: 'good' | 'bad'
}

export const WarningItens = styled.div<WarningItensProps>`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.4375rem;

  background-color: ${(props) => props.theme.background};
  padding: 1rem 0.5rem;
  border-radius: 6px;
  border: 1px solid
    ${(props) =>
      props.variant === 'good'
        ? props.theme['blue-light']
        : props.theme['red-light']};

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1.5rem;
`
