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
                <Grades variant="black">{data.schoolSubject}</Grades>
                <Grades
                  variant={
                    data.grades.gradeOne !== undefined &&
                    data.grades.gradeOne >= 5
                      ? 'good'
                      : 'bad'
                  }
                >
                  {data.grades.gradeOne}
                </Grades>

                <Grades
                  variant={
                    data.grades.gradeTwo !== undefined &&
                    data.grades.gradeTwo >= 5
                      ? 'good'
                      : 'bad'
                  }
                >
                  {data.grades.gradeTwo}
                </Grades>

                <Grades
                  variant={
                    data.grades.gradeThree !== undefined &&
                    data.grades.gradeThree >= 5
                      ? 'good'
                      : 'bad'
                  }
                >
                  {data.grades.gradeThree}
                </Grades>

                <Grades
                  variant={
                    data.grades.gradeFour !== undefined &&
                    data.grades.gradeFour >= 5
                      ? 'good'
                      : 'bad'
                  }
                >
                  {data.grades.gradeFour}
                </Grades>

                <Grades
                  variant={
                    data.finalGrade !== undefined && data.finalGrade >= 5
                      ? 'good'
                      : 'bad'
                  }
                >
                  {data.finalGrade}
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
