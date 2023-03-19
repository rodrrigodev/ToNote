import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
} from '../../../../components/NewSchoolSubjectModal/styles'
import { Form } from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formatDate } from '../../../../utils/formatDate'
import { useContext } from 'react'
import { SchoolDataContext } from '../../../../contexts/SchoolDataContext'
import { v4 as uuidv4 } from 'uuid'
import { ErrorMessage } from '../../../EditGrades/formEditGrades/styles'

const homeWorkWarningsSchema = z.object({
  schoolSubject: z
    .string()
    .min(4, { message: 'A matéria deve ter mínimo 4 caracteres!' }),
  warning: z
    .string()
    .min(4, { message: 'O assunto deve ter mínimo 4 caracteres!' }),
  finalDate: z
    .string()
    .min(10, {
      message: 'A data deve seguir o padrão DD/MM/AAAA ou DD MM AAAA!',
    })
    .max(10, { message: 'Deve ter máximo 10 caracteres!' })
    .refine((val) => formatDate(val), { message: 'Não deve conter letras!' }),
})

type homeWorkSchema = z.infer<typeof homeWorkWarningsSchema>

export function NewHomeworkModal() {
  const dateNow = new Date().toLocaleDateString('pt-br', { dateStyle: 'short' })
  const { handleNewWarning } = useContext(SchoolDataContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<homeWorkSchema>({
    resolver: zodResolver(homeWorkWarningsSchema),
  })

  function clearForm() {
    reset()
  }

  function newWarning(data: homeWorkSchema) {
    const { finalDate, schoolSubject, warning } = data
    const date = formatDate(finalDate)
    const isDate = date ? new Date(date) : new Date()

    const newData = {
      id: uuidv4(),
      schoolSubject,
      warning,
      finalDate: isDate,
      finished: false,
    }

    handleNewWarning(newData)
    clearForm()
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

          <input placeholder={`${dateNow}`} {...register('finalDate')} />

          <button type="submit">Salvar</button>
        </Form>
        {errors && <ErrorMessage>{errors.schoolSubject?.message}</ErrorMessage>}
        {errors && <ErrorMessage>{errors.warning?.message}</ErrorMessage>}
        {errors && <ErrorMessage>{errors.finalDate?.message}</ErrorMessage>}
      </Content>
    </Dialog.Portal>
  )
}
