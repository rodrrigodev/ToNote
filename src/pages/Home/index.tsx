import {
  Grades,
  GradesAndWarningsContainer,
  GradesInfoContainer,
  WarningItens,
  WarningsContainer,
} from './styles'
import { Warning } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Link } from 'react-router-dom'

export function Home() {
  const theme = useTheme()
  return (
    <GradesAndWarningsContainer>
      <GradesInfoContainer>
        <div>
          <span>Matéria</span>
          <span>N1</span>
          <span>N2</span>
          <span>N3</span>
          <span>N4</span>
          <span>Média</span>
        </div>

        <div>
          <div>
            <Grades variant="black">Matemática</Grades>
            <Grades variant="bad">4</Grades>
            <Grades variant="good">7</Grades>
            <Grades variant="good">8</Grades>
            <Grades variant="good">7</Grades>
            <Grades variant="good">9</Grades>
          </div>

          <div>
            <Grades variant="black">Português</Grades>
            <Grades variant="bad">4</Grades>
            <Grades variant="good">7</Grades>
            <Grades variant="good">8</Grades>
            <Grades variant="good">7</Grades>
            <Grades variant="good">9</Grades>
          </div>
        </div>
        <Link to="/edit">Editar</Link>
      </GradesInfoContainer>

      <WarningsContainer>
        <strong>
          <Warning size={32} color={theme['red-light']} /> Avisos
        </strong>

        <WarningItens variant="good">
          <span>Impactos Ambientais</span>
          <span>14 Dias Restantes</span>
        </WarningItens>

        <WarningItens variant="bad">
          <span>Processo de evolução</span>
          <span>6 Dias Restantes</span>
        </WarningItens>
      </WarningsContainer>
    </GradesAndWarningsContainer>
  )
}
