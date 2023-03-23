import { intlFormatDistance } from 'date-fns'
import { Warning } from 'phosphor-react'
import { useContext, useState } from 'react'
import { useTheme } from 'styled-components'
import { SchoolDataContext } from '../../../../contexts/SchoolDataContext'
import { ButtonPagination } from '../../../Homework/styles'
import {
  PaginationWarnings,
  WarningItens,
  WarningsContainer,
  WarningTitle,
} from './styles'

export function Warnings() {
  const theme = useTheme()
  const { warningsData } = useContext(SchoolDataContext)
  const [itemOffset, setItemOffset] = useState(0)
  const allWarnings = warningsData.filter((data) => {
    return !data.finished
  })
  const toShow = allWarnings.slice(itemOffset * 4, (itemOffset + 1) * 4)
  const pageSize = Array.from(Array(Math.ceil(allWarnings.length / 4)).keys())

  return (
    <WarningsContainer>
      <WarningTitle>
        <Warning size={32} color={theme['red-light']} /> Avisos
      </WarningTitle>

      {toShow.map((data) => {
        return (
          <WarningItens key={data.id}>
            <span>{data.warning}</span>

            <span>
              Entrega:
              {' ' +
                intlFormatDistance(new Date(data.finalDate), new Date(), {
                  locale: 'pt',
                })}
            </span>
          </WarningItens>
        )
      })}

      {pageSize.length > 1 && (
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
      )}
    </WarningsContainer>
  )
}
