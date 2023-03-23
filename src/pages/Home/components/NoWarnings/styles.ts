import styled from 'styled-components'

export const NoWarningsContainer = styled.div`
  background-color: ${(props) => props.theme.black};
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  @media (max-width: 834px) {
    align-items: center;
  }

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 8.5rem 0 10rem 0;

    p {
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 1.75rem;
      text-align: center;
      text-transform: uppercase;
    }

    @media (max-width: 834px) {
      justify-items: center;
    }
  }
`
