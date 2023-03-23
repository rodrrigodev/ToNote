import styled from 'styled-components'
import { Pagination } from '../../../Homework/styles'

export const WarningsContainer = styled.div`
  background-color: ${(props) => props.theme.black};
  padding: 2.5rem;
  border-radius: 6px;
  width: 40%;
  align-self: flex-start;

  @media (max-width: 834px) {
    width: 100%;
  }
`
export const WarningTitle = styled.strong`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.75rem;
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const WarningItens = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.4375rem;

  background-color: ${(props) => props.theme.background};
  padding: 1rem 0.5rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['red-light']};

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1.5rem;
  text-align: center;
`
export const PaginationWarnings = styled(Pagination)`
  justify-content: center;
  margin-top: 1.5rem;

  button {
    border: 0;
    font-weight: 500;
    font-size: 1.5rem;
  }
`
