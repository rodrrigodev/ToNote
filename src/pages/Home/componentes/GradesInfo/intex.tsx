import { SchoolData } from '../../../../contexts/SchoolDataContext'
import { calcGrades } from '../../../../utils/calcGrades'
import { Grades } from './styles'

interface GradesInfoProps {
  info: SchoolData
}

export function GradesInfo({ info }: GradesInfoProps) {
  const {
    schoolSubject,
    grades: { gradeOne, gradeTwo, gradeThree, gradeFour },
  } = info

  const finalGrade = calcGrades([gradeOne, gradeTwo, gradeThree, gradeFour])

  return (
    <div>
      <div>
        <Grades variant="black">{schoolSubject}</Grades>

        <Grades variant={!!gradeOne && gradeOne >= 5 ? 'good' : 'bad'}>
          {gradeOne || ''}
        </Grades>

        <Grades variant={!!gradeTwo && gradeTwo >= 5 ? 'good' : 'bad'}>
          {gradeTwo || ''}
        </Grades>

        <Grades variant={!!gradeThree && gradeThree >= 5 ? 'good' : 'bad'}>
          {gradeThree || ''}
        </Grades>

        <Grades variant={!!gradeFour && gradeFour >= 5 ? 'good' : 'bad'}>
          {gradeFour || ''}
        </Grades>

        <Grades variant={!!finalGrade && finalGrade >= 5 ? 'good' : 'bad'}>
          {finalGrade || ''}
        </Grades>
      </div>
    </div>
  )
}
