import styled from 'styled-components'

export const AbscenceContainer = styled.main`
  max-width: 90rem;
  width: 90%;
  margin: 6.5rem auto 0 auto;

  display: flex;
  justify-content: space-between;
  gap: 3.75rem;
`
const AbscenceBoxBase = styled.div`
  background-color: ${(props) => props.theme.black};
  padding: 2.5rem;
  border-radius: 6px;
`

export const AbscenceIncreseDecrease = styled(AbscenceBoxBase)`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.75rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const IncreseAndDecrease = styled.div`
  background-color: ${(props) => props.theme.white};
  span {
    color: ${(props) => props.theme.black};
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.4375rem;
    padding: 2rem;
  }

  input {
    background-color: ${(props) => props.theme['black-light']};
  }
`

export const TotalAbscence = styled(AbscenceBoxBase)``
