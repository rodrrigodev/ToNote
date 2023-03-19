import styled from 'styled-components'

export const NoWarningsContainer = styled.div`
  background-color: ${(props) => props.theme.black};
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 10rem;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    p {
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 1.75rem;
      text-align: center;
      text-transform: uppercase;
    }
  }
`
