import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
} from '../../../components/NewSchoolSubjectModal/styles'
import { Form } from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formatDate } from '../../../utils/formatDate'

const homeWorkWarningsSchema = z.object({
  schoolSubject: z.string().min(4, { message: 'Deve ter mínimo 4 caracteres' }),
  warning: z.string().min(4, { message: 'Deve ter mínimo 4 caracteres' }),
  date: z
    .string()
    .min(10, { message: 'Deve ter mínimo 10 caracteres' })
    .max(10, { message: 'Deve ter máximo 10 caracteres' })
    .refine((val) => formatDate(val), { message: 'Não deve conter letras' }),
})

type homeWorkSchema = z.infer<typeof homeWorkWarningsSchema>

export function NewHomeworkModal() {
  const dateNow = new Date().toLocaleDateString('pt-br', { dateStyle: 'short' })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<homeWorkSchema>({
    resolver: zodResolver(homeWorkWarningsSchema),
  })

  console.log(errors)

  function newWarning(data: homeWorkSchema) {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Novo Trabalho</Dialog.Title>

        <CloseButton>
          <X size={32} />
        </CloseButton>

        <Form onSubmit={handleSubmit(newWarning)}>
          <input
            type="text"
            placeholder="Matéria"
            {...register('schoolSubject')}
          />
          <input type="text" placeholder="Assunto" {...register('warning')} />

          <input placeholder={`${dateNow}`} {...register('date')} />

          <button type="submit">Salvar</button>
        </Form>
      </Content>
    </Dialog.Portal>
  )
}
