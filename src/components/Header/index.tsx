import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { HeaderContainer, NavContainer, NewSchoolSubjectBtn } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewSchoolSubjectModal } from '../NewSchoolSubjectModal'
import { useContext } from 'react'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'

export function Header() {
  const { schoolData } = useContext(SchoolDataContext)

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>

        <NavContainer>
          {schoolData.length ? (
            <NavLink to="/absence" end title="Faltas">
              Faltas
            </NavLink>
          ) : (
            ''
          )}
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
