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
import { useContext } from 'react'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'
import { CalcGrades } from '../../utils/CalcGrades'

export function Home() {
  const theme = useTheme()
  const { schoolData } = useContext(SchoolDataContext)

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

        {schoolData.map((data) => {
          return (
            <div key={data.id}>
              <div>
                <Grades variant="black">{data.schoolSubjects}</Grades>
                <Grades
                  variant={
                    data.n1 !== undefined && data.n1 >= 5 ? 'good' : 'bad'
                  }
                >
                  {data.n1}
                </Grades>
                <Grades
                  variant={
                    data.n2 !== undefined && data.n2 >= 5 ? 'good' : 'bad'
                  }
                >
                  {data.n2}
                </Grades>
                <Grades variant={data.n3 >= 5 ? 'good' : 'bad'}>
                  {data.n3}
                </Grades>
                <Grades variant={data.n4 >= 5 ? 'good' : 'bad'}>
                  {data.n4}
                </Grades>
                <Grades variant={data.n1 >= 5 ? 'good' : 'bad'}>
                  {CalcGrades([data.n1, data.n2, data.n3, data.n4])}
                </Grades>
              </div>
            </div>
          )
        })}
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
