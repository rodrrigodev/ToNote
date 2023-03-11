import { HomeworkLinksContainer } from './styles'
import { useTheme } from 'styled-components'
import { Planet } from 'phosphor-react'

export function UsefulLinks() {
  const theme = useTheme()

  return (
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

        <a href="https://www.infoescola.com/" target="_blank" rel="noreferrer">
          InfoEscola
        </a>

        <a
          href="https://mundoeducacao.uol.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          Mundo Educação
        </a>

        <a href="https://www.suapesquisa.com/" target="_blank" rel="noreferrer">
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
  )
}
