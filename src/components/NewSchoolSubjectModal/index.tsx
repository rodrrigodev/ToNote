import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { CloseButton, Content, Overlay } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'
import { v4 as uuidv4 } from 'uuid'

const newSchoolSubjectSchema = z.object({
  schoolSubject: z.string().min(4),
  gradeOne: z.nan().or(z.number().max(10)).optional(),
  gradeTwo: z.nan().or(z.number().max(10)).optional(),
  gradeThree: z.nan().or(z.number().max(10)).optional(),
  gradeFour: z.nan().or(z.number().max(10)).optional(),
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
  })

  console.log(errors)
  function onSub(data: SchoolSubjectSchema) {
    const id = uuidv4()
    const { schoolSubject, gradeOne, gradeTwo, gradeThree, gradeFour } = data
    const datata = {
      id,
      schoolSubject,
      grades: { gradeOne, gradeTwo, gradeThree, gradeFour },
      schoolAbsence: 0,
      finalGrade: 0,
    }

    console.log(datata)

    handleAddNewSchoolData(datata)
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
