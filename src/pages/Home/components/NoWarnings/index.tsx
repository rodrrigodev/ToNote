import { CheckCircle, Warning } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { WarningTitle } from '../Warnings/styles'
import { NoWarningsContainer } from './styles'

export function NoWarnings() {
  const theme = useTheme()

  return (
    <NoWarningsContainer>
      <WarningTitle>
        <Warning size={32} color={theme['red-light']} /> Avisos
      </WarningTitle>

      <div>
        <CheckCircle size={74} color={theme['blue-light']} />
        <p>
          Sem avisos <br /> no momento!
        </p>
      </div>
    </NoWarningsContainer>
  )
}
