import styled from 'styled-components'

export const FireWorksContainer = styled.div`
  background-color: ${(props) => props.theme.black};
  width: 50%;
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.0625rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    width: 80%;

    p {
      align-self: flex-start;
      font-size: 1.5rem;
      line-height: 1.75rem;

      &:nth-child(2) {
        align-self: flex-end;
      }

      span {
        font-weight: 700;
      }
    }
  }

  img {
    width: 70%;
  }
`
