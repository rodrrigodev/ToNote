import { useContext } from 'react'
import { SchoolDataContext } from '../../../../contexts/SchoolDataContext'
import { TotalAbscence, TotalAbscenceCount } from './styles'

export function TotalAbsence() {
  const { schoolData } = useContext(SchoolDataContext)
  const totalGrades = schoolData
    .map((data) => {
      return data.schoolAbsence
    })
    .reduce((acc, cur) => {
      return acc + cur
    })

  return (
    <TotalAbscence>
      <strong>Total</strong>
      <div>
        {schoolData.map((data) => {
          return <span key={data.id + 1}>{data.schoolAbsence}</span>
        })}
      </div>

      <TotalAbscenceCount>
        <span>{totalGrades}</span>
        <span>Faltas</span>
      </TotalAbscenceCount>
    </TotalAbscence>
  )
}
