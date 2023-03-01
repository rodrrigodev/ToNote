import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { CloseButton, Content, Overlay } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'

const newSchoolSubjectSchema = z.object({
  schoolSubject: z.string().min(4),
  gradeOne: z.number().max(10).optional().or(z.boolean()),
  gradeTwo: z.number().max(10).optional().or(z.boolean()),
  gradeThree: z.number().max(10).optional().or(z.boolean()),
  gradeFour: z.number().max(10).optional().or(z.boolean()),
})

type SchoolSubjectSchema = z.infer<typeof newSchoolSubjectSchema>

export function NewSchoolSubjectModal() {
  const { handleAddNewSchoolData } = useContext(SchoolDataContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchoolSubjectSchema>({
    resolver: zodResolver(newSchoolSubjectSchema),
    defaultValues: {
      gradeOne: false,
      gradeTwo: false,
      gradeThree: false,
      gradeFour: false,
    },
  })

  console.log(errors)
  const onSub = (data) => {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Matéria</Dialog.Title>

        <CloseButton>
          <X size={32} />
        </CloseButton>

        <form onSubmit={handleSubmit(onSub)}>
          <input
            type="text"
            placeholder="Matéria"
            {...register('schoolSubject')}
          />

          <div>
            <input
              type="number"
              placeholder="1º Nota"
              {...register('gradeOne', { valueAsNumber: true })}
            />
            <input
              type="number"
              placeholder="2º Nota"
              {...register('gradeTwo', { valueAsNumber: true })}
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="3º Nota"
              {...register('gradeThree', { valueAsNumber: true })}
            />
            <input
              type="number"
              placeholder="4º Nota"
              {...register('gradeFour', { valueAsNumber: true })}
            />
          </div>
          <button type="submit">Salvar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
