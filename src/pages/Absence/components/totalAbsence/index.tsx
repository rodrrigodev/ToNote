import { useContext } from 'react'
import { SchoolDataContext } from '../../../../contexts/SchoolDataContext'
import { TotalAbscence, TotalAbscenceCount, TotalItens } from './styles'

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
      <TotalItens>
        {schoolData.map((data) => {
          return (
            <div key={data.id + 1}>
              <span>{data.schoolSubject}</span>
              <span>{data.schoolAbsence}</span>
            </div>
          )
        })}
      </TotalItens>

      <TotalAbscenceCount>
        <span>{totalGrades}</span>
        <span>Faltas</span>
      </TotalAbscenceCount>
    </TotalAbscence>
  )
}
