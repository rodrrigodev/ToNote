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

    @media (max-width: 630px) {
      flex-direction: column;
      padding: 2rem 0 3rem 0;
    }
  }

  img {
    max-width: 10.75rem;
    width: 100%;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 1rem;

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

    @media (max-width: 406px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 630px) {
    width: 100%;
    justify-content: space-between;
  }
`

export const NewSchoolSubjectBtn = styled.button`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.375rem;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: all 500ms;
  width: max-content;

  &.active {
    color: ${(props) => props.theme['blue-light']};
  }

  &:hover {
    color: ${(props) => props.theme['blue-light']};
    transition: all 500ms;
  }

  @media (max-width: 406px) {
    font-size: 1.5rem;
  }
`
