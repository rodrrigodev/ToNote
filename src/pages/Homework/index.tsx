import { MagnifyingGlass, Trash } from 'phosphor-react'
import {
  HomeworkDataContainer,
  HomeworkContainer,
  HomeworkDataAndLinksContainer,
  SearchBoxContainer,
  HomeworkToFinish,
  FilterBtn,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewHomeworkModal } from './components/NewHomeworkModal'
import { useContext, useState } from 'react'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'
import { intlFormatDistance } from 'date-fns'
import { UsefulLinks } from './components/UsefulLinks'

export function Homework() {
  const { warningsData, handleRemoveWarningAndCheckFinished } =
    useContext(SchoolDataContext)
  const [finished, setFinished] = useState<string | boolean>('all')
  const filtered = warningsData.filter((data) => {
    if (finished === 'all' || !finished.toString().length) {
      return data
    } else if (!finished) {
      return !data.finished
    } else if (finished === 'finished') {
      return data.finished
    } else {
      return (
        data.schoolSubject
          .toUpperCase()
          .includes(finished.toString().toUpperCase()) ||
        data.warning.toUpperCase().includes(finished.toString().toUpperCase())
      )
    }
  })
  console.log(finished)
  return (
    <HomeworkContainer>
      <SearchBoxContainer>
        <input
          type="text"
          placeholder="Busque aqui um trabalho"
          onChange={(event) => setFinished(event.currentTarget.value)}
        />
        <button type="button">
          <MagnifyingGlass size={32} />
          Buscar
        </button>
      </SearchBoxContainer>

      <HomeworkDataAndLinksContainer>
        <HomeworkDataContainer>
          <div>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <FilterBtn type="button">Novo Trabalho</FilterBtn>
              </Dialog.Trigger>
              <NewHomeworkModal />
            </Dialog.Root>

            <FilterBtn
              type="button"
              variant={
                !finished && finished.toString().length > 0
                  ? 'active'
                  : undefined
              }
              onClick={() =>
                setFinished(
                  finished === 'all' || finished === 'finished' ? false : 'all',
                )
              }
            >
              Pendentes
            </FilterBtn>

            <FilterBtn
              type="button"
              variant={finished === 'finished' ? 'active' : undefined}
              onClick={() =>
                setFinished(
                  finished === 'all' || !finished ? 'finished' : 'all',
                )
              }
            >
              Finalizados
            </FilterBtn>
          </div>

          {filtered.map((data) => {
            return (
              <HomeworkToFinish
                variant={data.finished ? 'finished' : 'notFinished'}
                key={data.id}
                onClick={() =>
                  handleRemoveWarningAndCheckFinished(data.id, 'check')
                }
              >
                <span>{data.schoolSubject}</span>
                <span>{data.warning}</span>
                <span>
                  {intlFormatDistance(data.finalDate, new Date(), {
                    locale: 'pt',
                  })}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    handleRemoveWarningAndCheckFinished(data.id, 'remove')
                  }
                >
                  <Trash size={32} />
                </button>
              </HomeworkToFinish>
            )
          })}
        </HomeworkDataContainer>

        <UsefulLinks />
      </HomeworkDataAndLinksContainer>
    </HomeworkContainer>
  )
}
