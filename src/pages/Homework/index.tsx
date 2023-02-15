import { MagnifyingGlass } from 'phosphor-react'
import { HomeworkContainer, SearchBoxContainer } from './styles'

export function Homework() {
  return (
    <HomeworkContainer>
      <SearchBoxContainer>
        <input type="text" placeholder="Busque aqui um trabalho" />
        <button type="button">
          <MagnifyingGlass size={32} />
          Buscar
        </button>
      </SearchBoxContainer>
    </HomeworkContainer>
  )
}
