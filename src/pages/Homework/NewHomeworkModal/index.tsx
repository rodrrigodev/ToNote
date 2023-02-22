import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
} from '../../../components/NewSchoolSubjectModal/styles'
import { Form } from './styles'

export function NewHomeworkModal() {
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
          <input type="text" placeholder="Data" />
          <button>Salvar</button>
        </Form>
      </Content>
    </Dialog.Portal>
  )
}
