import { Minus, Plus, Warning } from 'phosphor-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'
import {
  AbscenceContainer,
  AbscenceIncreseDecrease,
  AddBtn,
  IncreseAndDecrease,
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
          return (
            <IncreseAndDecrease key={data.id}>
              <span>{data.schoolSubjects}:</span>

              <div>
                <button>
                  <Plus size={32} />
                </button>

                <input type="number" value={data.schoolAbsence} readOnly />

                <button>
                  <Minus size={32} />
                </button>
              </div>

              <AddBtn type="button">Adicionar</AddBtn>
            </IncreseAndDecrease>
          )
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
