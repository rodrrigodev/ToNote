import { Warning } from 'phosphor-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'
import { AbsenceContainer } from './components/AbsenceContainer'
import { TotalAbsence } from './components/totalAbsence'
import { AbscenceContainer, AbscenceIncreseDecrease } from './styles'

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
      <TotalAbsence />
    </AbscenceContainer>
  )
}
