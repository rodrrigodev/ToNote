import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { HeaderContainer, NavContainer, NewSchoolSubjectBtn } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewSchoolSubjectModal } from '../NewSchoolSubjectModal'

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
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewSchoolSubjectBtn>Nova Matéria</NewSchoolSubjectBtn>
            </Dialog.Trigger>

            <NewSchoolSubjectModal />
          </Dialog.Root>
          <NavLink to="/homework">Trabalhos</NavLink>
        </NavContainer>
      </div>
    </HeaderContainer>
  )
}
