import { MagnifyingGlass, Planet, Trash } from 'phosphor-react'
import {
  HomeworkDataContainer,
  HomeworkContainer,
  HomeworkDataAndLinksContainer,
  SearchBoxContainer,
  HomeworkLinksContainer,
  HomeworkToFinish,
} from './styles'

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

      <HomeworkDataAndLinksContainer>
        <HomeworkDataContainer>
          <div>
            <button type="button">Novo Trabalho</button>
            <button type="button">Pendentes</button>
            <button type="button">Finalizados</button>
          </div>

          <HomeworkToFinish variant="finished">
            <span>Historia</span>
            <span>II Guerra Mundial</span>
            <span>14 Dias Restantes</span>
            <span>
              <Trash size={32} />
            </span>
          </HomeworkToFinish>

          <HomeworkToFinish variant="notFinished">
            <span>Geografia</span>
            <span>Poluição Oceanica</span>
            <span>4 Dias Restantes</span>
            <span>
              <Trash size={32} />
            </span>
          </HomeworkToFinish>
        </HomeworkDataContainer>

        <HomeworkLinksContainer>
          <span>
            <Planet size={32} />
            Links Úteis
          </span>

          <div>
            <a
              href="https://brasilescola.uol.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Brasil Escola
            </a>

            <a
              href="https://www.ebiografia.com/leonardo_vinci/"
              target="_blank"
              rel="noreferrer"
            >
              Ebiografia
            </a>

            <a
              href="https://www.infoescola.com/"
              target="_blank"
              rel="noreferrer"
            >
              InfoEscola
            </a>

            <a
              href="https://mundoeducacao.uol.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Mundo Educação
            </a>

            <a
              href="https://www.suapesquisa.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sua Pesquisa
            </a>

            <a
              href="https://www.todamateria.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Toda Matéria
            </a>

            <a
              href="https://www.wikipedia.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
          </div>
        </HomeworkLinksContainer>
      </HomeworkDataAndLinksContainer>
    </HomeworkContainer>
  )
}
