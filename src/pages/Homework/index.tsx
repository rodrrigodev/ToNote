import { MagnifyingGlass } from 'phosphor-react'
import {
  HomeworkDataContainer,
  HomeworkContainer,
  HomeworkDataAndLinksContainer,
  SearchBoxContainer,
  FilterBtn,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewHomeworkModal } from './components/NewHomeworkModal'
import { useContext, useEffect, useState } from 'react'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'
import { UsefulLinks } from './components/UsefulLinks'
import { HomeworkToFinish } from './components/HomeworkToFinish'
import { filterWarnings } from '../../utils/filterWarnings'

export function Homework() {
  const { warningsData } = useContext(SchoolDataContext)
  const [search, setSearch] = useState<string | boolean>('all')
  const [itemOffset, setItemOffset] = useState(0)
  const filtered = filterWarnings(warningsData, search, itemOffset)
  const pageSize = Array.from(
    Array(Math.ceil(filtered.originalSize / 5)).keys(),
  )

  useEffect(() => {
    setItemOffset(0)
  }, [search])

  console.log(filtered)
  return (
    <HomeworkContainer>
      <SearchBoxContainer>
        <input
          type="text"
          placeholder="Busque aqui um trabalho"
          onChange={(event) => setSearch(event.currentTarget.value)}
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
                !search && search.toString().length > 0 ? 'active' : undefined
              }
              onClick={() =>
                setSearch(
                  search === 'all' || search === 'finished' ? false : 'all',
                )
              }
            >
              Pendentes
            </FilterBtn>

            <FilterBtn
              type="button"
              variant={search === 'finished' ? 'active' : undefined}
              onClick={() =>
                setSearch(search === 'all' || !search ? 'finished' : 'all')
              }
            >
              Finalizados
            </FilterBtn>
          </div>

          {filtered.toShow.map((data) => {
            return <HomeworkToFinish data={data} key={data.id} />
          })}

          <div>
            {pageSize.map((amount) => {
              return (
                <button key={amount} onClick={() => setItemOffset(amount)}>
                  {amount + 1}
                </button>
              )
            })}
          </div>
          {/* const newOffset = (event.selected * itemsPerPage) % filteredData.length */}

          {/* const currentItems = filteredData.slice(itemOffset, endOffset) */}
        </HomeworkDataContainer>

        <UsefulLinks />
      </HomeworkDataAndLinksContainer>
    </HomeworkContainer>
  )
}
