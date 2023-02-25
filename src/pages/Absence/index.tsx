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

                <input type="number" value={2} />

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
        <div>
          <span>Total</span>
          <span>15</span>
        </div>

        <div>
          <span>15</span>
          <span>Faltas</span>
        </div>
      </TotalAbscence>
    </AbscenceContainer>
  )
}
