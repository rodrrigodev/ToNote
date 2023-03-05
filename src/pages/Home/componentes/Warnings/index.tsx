import { intlFormatDistance } from 'date-fns'
import { Warning } from 'phosphor-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { SchoolDataContext } from '../../../../contexts/SchoolDataContext'
import { WarningItens, WarningsContainer } from './styles'

export function Warnings() {
  const theme = useTheme()
  const { warningsData } = useContext(SchoolDataContext)

  return (
    <WarningsContainer>
      <strong>
        <Warning size={32} color={theme['red-light']} /> Avisos
      </strong>

      {warningsData.map((data) => {
        return (
          <WarningItens variant={data.finished ? 'good' : 'bad'} key={data.id}>
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
  )
}
