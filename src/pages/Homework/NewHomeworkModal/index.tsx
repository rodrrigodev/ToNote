import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
} from '../../../components/NewSchoolSubjectModal/styles'
import { Form } from './styles'

export function NewHomeworkModal() {
  const dateNow = new Date().toLocaleDateString('pt-br', { dateStyle: 'short' })
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Novo Trabalho</Dialog.Title>

        <CloseButton>
          <X size={32} />
        </CloseButton>

        <Form>
          <input type="text" placeholder="Matéria" />
          <input type="text" placeholder="Assunto" />
          <input type="text" placeholder={`${dateNow}`} />
          <button>Salvar</button>
        </Form>
      </Content>
    </Dialog.Portal>
  )
}
