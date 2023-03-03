import { Minus, Plus, Warning } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
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

  const { register } = useForm()

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
              <span>{data.schoolSubject}:</span>

              <div>
                <button>
                  <Plus size={32} />
                </button>

                <input
                  {...register(data.id)}
                  value={data.schoolAbsence.toUpdate}
                  readOnly
                />

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
            return (
              <span key={data.id + 1}>{data.schoolAbsence.actualValue}</span>
            )
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
