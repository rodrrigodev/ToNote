import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CloseButton, Content, Overlay } from './styles'

export function NewSchoolSubjectModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Matéria</Dialog.Title>

        <CloseButton>
          <X size={32} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Matéria" />

          <div>
            <input type="number" placeholder="1º Nota" />
            <input type="number" placeholder="2º Nota" />
          </div>

          <div>
            <input type="number" placeholder="3º Nota" />
            <input type="number" placeholder="4º Nota" />
          </div>
          <button type="submit">Salvar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
