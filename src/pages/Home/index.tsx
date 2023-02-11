import {
  GradesAndWarningsContainer,
  TableGradesContainer,
  WarningsContainer,
} from './styles'
import { Warning } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Home() {
  const theme = useTheme()
  return (
    <GradesAndWarningsContainer>
      <TableGradesContainer>
        <tr>
          <th>Matéria</th>
          <th>N1</th>
          <th>N2</th>
          <th>N3</th>
          <th>N4</th>
          <th>Média</th>
        </tr>

        <tr>
          <td>Potuguês</td>
          <td>8</td>
          <td>7</td>
          <td>5</td>
          <td>9</td>
          <td>7</td>
        </tr>

        <tr>
          <td>Matemática</td>
          <td>8</td>
          <td>7</td>
          <td>5</td>
          <td>9</td>
          <td>7</td>
        </tr>

        <tr>
          <td>Inglês</td>
          <td>8</td>
          <td>7</td>
          <td>5</td>
          <td>9</td>
          <td>7</td>
        </tr>
      </TableGradesContainer>

      <WarningsContainer>
        <strong>
          <Warning size={32} color={theme['red-light']} /> Avisos
        </strong>

        <div>
          <span>Impactos Ambientais</span>
          <span>14 Dias Restantes</span>
        </div>

        <div>
          <span>Processo de evolução</span>
          <span>6 Dias Restantes</span>
        </div>
      </WarningsContainer>
    </GradesAndWarningsContainer>
  )
}
