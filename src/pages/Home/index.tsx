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
import { intlFormatDistance } from 'date-fns'

export function Home() {
  const theme = useTheme()
  const { schoolData, warningsData } = useContext(SchoolDataContext)
  console.log(warningsData[0].finalDate)

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
                    data.grades[0] !== undefined && data.grades[0] >= 5
                      ? 'good'
                      : 'bad'
                  }
                >
                  {data.grades[0]}
                </Grades>

                <Grades
                  variant={
                    data.grades[1] !== undefined && data.grades[1] >= 5
                      ? 'good'
                      : 'bad'
                  }
                >
                  {data.grades[1]}
                </Grades>

                <Grades
                  variant={
                    data.grades[2] !== undefined && data.grades[2] >= 5
                      ? 'good'
                      : 'bad'
                  }
                >
                  {data.grades[2]}
                </Grades>

                <Grades
                  variant={
                    data.grades[3] !== undefined && data.grades[3] >= 5
                      ? 'good'
                      : 'bad'
                  }
                >
                  {data.grades[3]}
                </Grades>

                <Grades
                  variant={
                    CalcGrades(data.grades) !== undefined &&
                    CalcGrades(data.grades) >= 5
                      ? 'good'
                      : 'bad'
                  }
                >
                  {CalcGrades(data.grades)}
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

        {warningsData.map((data) => {
          return (
            <WarningItens
              variant={data.finished ? 'good' : 'bad'}
              key={data.id}
            >
              <span>{data.warning}</span>

              <span>
                Entrega:
                {' ' +
                  intlFormatDistance(data.finalDate, new Date(), {
                    locale: 'pt',
                  })}
              </span>
            </WarningItens>
          )
        })}
      </WarningsContainer>
    </GradesAndWarningsContainer>
  )
}
