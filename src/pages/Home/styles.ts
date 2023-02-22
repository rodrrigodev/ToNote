import styled from 'styled-components'

export const MainContainerBase = styled.main`
  max-width: 90rem;
  width: 90%;
  margin: 6.5rem auto 0 auto;
`

export const GradesAndWarningsContainer = styled(MainContainerBase)`
  display: flex;
  justify-content: space-between;
  gap: 3.75rem;
`

export const GradesInfoContainer = styled.div`
  background-color: ${(props) => props.theme.black};
  width: 50%;
  padding: 2.5rem;
  border-radius: 6px;
  position: relative;

  > div:first-child {
    display: flex;
    justify-content: space-around;
    padding: 0 0.5rem 1.5rem 0.5rem;
  }

  > div:not(:first-child) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    div {
      background-color: ${(props) => props.theme.white};
      border-radius: 6px;
      display: flex;
      justify-content: space-around;
      padding: 1.0625rem 0.5rem;
    }
  }

  span {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.75rem;

    &:not(:first-of-type) {
      text-align: center;
      width: 4rem;
    }

    &:first-of-type {
      width: 7rem;
    }
  }

  a {
    position: absolute;
    right: 0.625rem;
    bottom: 0.625rem;
  }
`
interface GradesProps {
  variant: 'good' | 'bad' | 'black'
}

const variant = {
  good: '#00D1FF',
  bad: '#FF4D4D',
  black: '#000',
}

export const Grades = styled.span<GradesProps>`
  color: ${(props) => variant[props.variant]};
`

export const WarningsContainer = styled.div`
  background-color: ${(props) => props.theme.black};
  padding: 2.5rem;
  border-radius: 6px;
  width: 40%;

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
