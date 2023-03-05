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
import { calcGrades } from '../../utils/calcGrades'

export function Home() {
  const theme = useTheme()
  const { schoolData, warningsData } = useContext(SchoolDataContext)

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
          const {
            grades: { gradeOne, gradeTwo, gradeThree, gradeFour },
          } = data
          const finalGrade = calcGrades([
            gradeOne,
            gradeTwo,
            gradeThree,
            gradeFour,
          ])

          return (
            <div key={data.id}>
              <div>
                <Grades variant="black">{data.schoolSubject}</Grades>
                <Grades variant={!!gradeOne && gradeOne >= 5 ? 'good' : 'bad'}>
                  {gradeOne || ''}
                </Grades>

                <Grades variant={!!gradeTwo && gradeTwo >= 5 ? 'good' : 'bad'}>
                  {gradeTwo || ''}
                </Grades>

                <Grades
                  variant={!!gradeThree && gradeThree >= 5 ? 'good' : 'bad'}
                >
                  {gradeThree || ''}
                </Grades>

                <Grades
                  variant={!!gradeFour && gradeFour >= 5 ? 'good' : 'bad'}
                >
                  {gradeFour || ''}
                </Grades>

                <Grades
                  variant={!!finalGrade && finalGrade >= 5 ? 'good' : 'bad'}
                >
                  {finalGrade || ''}
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
