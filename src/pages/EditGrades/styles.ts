import styled from 'styled-components'
import { MainContainerBase } from '../Home/styles'

export const EditContainer = styled(MainContainerBase)`
  padding: 2.5rem;
  background-color: ${(props) => props.theme.black};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
`
