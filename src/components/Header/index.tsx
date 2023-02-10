import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { HeaderContainer, NavContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>

        <NavContainer>
          <NavLink to="/absence" end title="Faltas">
            Faltas
          </NavLink>
          <NavLink to="New">Nova Matéria</NavLink>
          <NavLink to="/homework" end title="Trabalhos">
            Trabalhos
          </NavLink>
        </NavContainer>
      </div>
    </HeaderContainer>
  )
}
