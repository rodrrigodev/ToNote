import { Warning } from 'phosphor-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'
import { AbsenceContainer } from './components/AbsenceContainer'
import {
  AbscenceContainer,
  AbscenceIncreseDecrease,
  TotalAbscence,
  TotalAbscenceCount,
} from './styles'

export function Absence() {
  const theme = useTheme()
  const { schoolData } = useContext(SchoolDataContext)

  return (
    <AbscenceContainer>
      <AbscenceIncreseDecrease>
        <strong>
          <Warning size={32} color={theme['blue-light']} />
          Faltas
        </strong>

        {schoolData.map((data) => {
          return <AbsenceContainer key={data.id} data={data} />
        })}
      </AbscenceIncreseDecrease>

      <TotalAbscence>
        <strong>Total</strong>
        <div>
          {schoolData.map((data) => {
            return <span key={data.id + 1}>{data.schoolAbsence}</span>
          })}
        </div>

        <TotalAbscenceCount>
          <span>15</span>
          <span>Faltas</span>
        </TotalAbscenceCount>
      </TotalAbscence>
    </AbscenceContainer>
  )
}
