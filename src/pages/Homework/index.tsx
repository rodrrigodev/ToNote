import { MagnifyingGlass, Planet, Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'
import {
  HomeworkDataContainer,
  HomeworkContainer,
  HomeworkDataAndLinksContainer,
  SearchBoxContainer,
  HomeworkLinksContainer,
  HomeworkToFinish,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewHomeworkModal } from './NewHomeworkModal'
import { useContext } from 'react'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'

export function Homework() {
  const theme = useTheme()
  const { warningsData } = useContext(SchoolDataContext)

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

            <button type="button">Pendentes</button>
            <button type="button">Finalizados</button>
          </div>

          <HomeworkToFinish variant="finished">
            <span>Historia</span>
            <span
              onClick={() => {
                console.log('Funciona')
              }}
            >
              II Guerra Mundial
            </span>
            <span>14 Dias Restantes</span>
            <button type="button">
              <Trash size={32} />
            </button>
          </HomeworkToFinish>

          <HomeworkToFinish variant="notFinished">
            <span>Geografia</span>
            <span>Poluição Oceanica</span>
            <span>4 Dias Restantes</span>
            <button type="button">
              <Trash size={32} />
            </button>
          </HomeworkToFinish>
        </HomeworkDataContainer>

        <HomeworkLinksContainer>
          <span>
            <Planet size={32} color={theme['blue-light']} />
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
