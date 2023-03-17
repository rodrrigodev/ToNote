import { intlFormatDistance } from 'date-fns'
import { Warning } from 'phosphor-react'
import { useContext, useState } from 'react'
import { useTheme } from 'styled-components'
import { SchoolDataContext } from '../../../../contexts/SchoolDataContext'
import { ButtonPagination } from '../../../Homework/styles'
import { PaginationWarnings, WarningItens, WarningsContainer } from './styles'

export function Warnings() {
  const theme = useTheme()
  const { warningsData } = useContext(SchoolDataContext)
  const [itemOffset, setItemOffset] = useState(0)
  const pageSize = Array.from(Array(Math.ceil(warningsData.length / 4)).keys())
  const toShow = warningsData
    .filter((data) => {
      return !data.finished
    })
    .slice(itemOffset * 4, (itemOffset + 1) * 4)

  return (
    <WarningsContainer>
      <strong>
        <Warning size={32} color={theme['red-light']} /> Avisos
      </strong>

      {toShow.map((data) => {
        return (
          <WarningItens key={data.id}>
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

      <PaginationWarnings aria-label="paginação">
        {pageSize.map((amount) => {
          return (
            <ButtonPagination
              key={amount}
              onClick={() => setItemOffset(amount)}
              variant={itemOffset === amount ? 'active' : undefined}
            >
              {amount + 1}
            </ButtonPagination>
          )
        })}
      </PaginationWarnings>
    </WarningsContainer>
  )
}
