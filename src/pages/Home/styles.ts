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

  @media (max-width: 834px) {
    flex-direction: column;
  }
`

export const GradesInfoContainer = styled.div`
  align-self: flex-start;
  background-color: ${(props) => props.theme.black};
  width: 50%;
  padding: 2.5rem;
  border-radius: 6px;
  position: relative;

  @media (max-width: 834px) {
    width: 100%;
  }

  > div:first-child {
    display: flex;
    justify-content: space-around;
    padding: 0 0.5rem 1.5rem 0.5rem;

    @media (max-width: 554px) {
      display: none;
    }
  }

  > div:not(:nth-child(1)):not(:nth-child(2)) {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    div {
      background-color: ${(props) => props.theme.white};
      border-radius: 6px;
      display: flex;
      justify-content: space-around;
      padding: 1.0625rem 0.5rem;

      &:nth-child(2) {
        display: none;

        @media (max-width: 554px) {
          display: flex;
        }
      }

      &:nth-child(1) {
        @media (max-width: 554px) {
          display: none;
        }
      }
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

export const ItensDescriptions = styled.div`
  display: none;
  justify-content: space-around;
  padding: 0 0.5rem 1.5rem 0.5rem;

  span {
    width: 4rem !important;
    text-align: center;
  }

  @media (max-width: 554px) {
    display: flex;
  }
`
