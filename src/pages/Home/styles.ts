import styled from 'styled-components'

export const MainContainerBase = styled.main`
  max-width: 90rem;
  width: 90%;
  margin: 6.5rem auto 2rem auto;
`

export const GradesAndWarningsContainer = styled(MainContainerBase)`
  display: flex;
  justify-content: space-between;
  gap: 3.75rem;
`

export const GradesInfoContainer = styled.div`
  align-self: flex-start;
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
    margin-bottom: 1rem;

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
