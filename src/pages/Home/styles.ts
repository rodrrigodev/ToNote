import styled from 'styled-components'

export const GradesAndWarningsContainer = styled.div`
  max-width: 90rem;
  width: 90%;
  margin: 6.5rem auto 0 auto;

  display: flex;
  justify-content: space-between;
`

export const TableGradesContainer = styled.table`
  background-color: ${(props) => props.theme.black};
  padding: 2.5rem;
  border-radius: 6px;
`

export const WarningsContainer = styled.div`
  background-color: ${(props) => props.theme.black};
  padding: 2.5rem;
  border-radius: 6px;
`
