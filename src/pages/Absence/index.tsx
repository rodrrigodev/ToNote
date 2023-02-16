import { Minus, Plus, Warning } from 'phosphor-react'
import { useTheme } from 'styled-components'
import {
  AbscenceContainer,
  AbscenceIncreseDecrease,
  IncreseAndDecrease,
  TotalAbscence,
} from './styles'

export function Absence() {
  const theme = useTheme()

  return (
    <AbscenceContainer>
      <AbscenceIncreseDecrease>
        <strong>
          <Warning size={32} color={theme['blue-light']} />
          Faltas
        </strong>

        <IncreseAndDecrease>
          <span>Português</span>

          <div>
            <button>
              <Plus size={32} />
            </button>

            <input type="number" />

            <button>
              <Minus size={32} />
            </button>
          </div>

          <button type="button">Adicionar</button>
        </IncreseAndDecrease>
      </AbscenceIncreseDecrease>

      <div>
        <TotalAbscence>
          <span>Total</span>
          <span>15</span>
        </TotalAbscence>

        <span>15 Faltas</span>
      </div>
    </AbscenceContainer>
  )
}
