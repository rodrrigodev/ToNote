import styled from 'styled-components'

export const HomeworkContainer = styled.main`
  max-width: 90rem;
  width: 90%;
  margin: 6.5rem auto 0 auto;
`
export const SearchBoxContainer = styled.div`
  max-width: 50rem;
  width: 100%;
  background-color: #0af;

  input {
    padding: 1rem 2.5rem;
    background-color: ${(props) => props.theme.black};
  }
`
