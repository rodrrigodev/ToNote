import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.black};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90rem;
    width: 90%;
    padding: 4rem 0;
    margin: 0 auto;
  }

  img {
    max-width: 10.75rem;
    width: 100%;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.375rem;
    transition: all 500ms;

    &.active {
      color: ${(props) => props.theme['blue-light']};
    }

    &:hover {
      color: ${(props) => props.theme['blue-light']};
      transition: all 500ms;
    }
  }
`
