import { MagnifyingGlass, Trash } from 'phosphor-react'
import {
  HomeworkDataContainer,
  HomeworkContainer,
  HomeworkDataAndLinksContainer,
  SearchBoxContainer,
  HomeworkToFinish,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewHomeworkModal } from './components/NewHomeworkModal'
import { useContext, useState } from 'react'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'
import { intlFormatDistance } from 'date-fns'
import { UsefulLinks } from './components/UsefulLinks'

export function Homework() {
  const { warningsData } = useContext(SchoolDataContext)
  const [finished, setFinished] = useState<boolean | 'all'>('all')
  const filtered = warningsData.filter((data) => {
    if (finished === 'all') {
      return data
    } else if (!finished) {
      return !data.finished
    } else {
      return data.finished
    }
  })

  return (
    <HomeworkContainer>
      <SearchBoxContainer>
        <input type="text" placeholder="Busque aqui um trabalho" />
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
                <button type="button">Novo Trabalho</button>
              </Dialog.Trigger>
              <NewHomeworkModal />
            </Dialog.Root>

            <button
              type="button"
              onClick={() => setFinished(!finished ? 'all' : false)}
            >
              Pendentes
            </button>

            <button
              type="button"
              onClick={() => setFinished(finished === 'all' ? true : 'all')}
            >
              Finalizados
            </button>
          </div>

          {filtered.map((data) => {
            return (
              <HomeworkToFinish
                variant={data.finished ? 'finished' : 'notFinished'}
                key={data.id}
              >
                <span>{data.schoolSubject}</span>
                <span
                  onClick={() => {
                    console.log('Funciona')
                  }}
                >
                  {data.warning}
                </span>
                <span>
                  {intlFormatDistance(data.finalDate, new Date(), {
                    locale: 'pt',
                  })}
                </span>
                <button type="button">
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
