import styled from 'styled-components'

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
