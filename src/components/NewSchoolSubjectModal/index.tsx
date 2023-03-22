import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { CloseButton, Content, Overlay } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'
import { v4 as uuidv4 } from 'uuid'
import { ErrorMessage } from '../../pages/EditGrades/formEditGrades/styles'

const newSchoolSubjectSchema = z.object({
  schoolSubject: z
    .string()
    .min(4, { message: 'O nome da matéria deve ter no mínimo 4 caracteres!' }),
  gradeOne: z.number().max(10).or(z.nan()).or(z.null()),
  gradeTwo: z.number().max(10).or(z.nan()).or(z.null()),
  gradeThree: z.number().max(10).or(z.nan()).or(z.null()),
  gradeFour: z.number().max(10).or(z.nan()).or(z.null()),
})

type SchoolSubjectSchema = z.infer<typeof newSchoolSubjectSchema>

export function NewSchoolSubjectModal() {
  const { handleAddNewSchoolData } = useContext(SchoolDataContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SchoolSubjectSchema>({
    resolver: zodResolver(newSchoolSubjectSchema),
  })

  function resetForm() {
    reset({
      schoolSubject: '',
      gradeOne: null,
      gradeTwo: null,
      gradeThree: null,
      gradeFour: null,
    })
  }

  function createNewSubject(data: SchoolSubjectSchema) {
    const id = uuidv4()
    const { schoolSubject, gradeOne, gradeTwo, gradeThree, gradeFour } = data

    const finalData = {
      id,
      schoolSubject,
      grades: {
        gradeOne: gradeOne || 0,
        gradeTwo: gradeTwo || 0,
        gradeThree: gradeThree || 0,
        gradeFour: gradeFour || 0,
      },

      schoolAbsence: 0,
    }

    handleAddNewSchoolData(finalData)
    resetForm()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Matéria</Dialog.Title>

        <CloseButton>
          <X size={32} />
        </CloseButton>

        <form onSubmit={handleSubmit(createNewSubject)}>
          <input placeholder="Matéria" {...register('schoolSubject')} />

          <div>
            <input
              placeholder="1º Nota"
              {...register('gradeOne', { valueAsNumber: true })}
            />
            <input
              placeholder="2º Nota"
              {...register('gradeTwo', { valueAsNumber: true })}
            />
          </div>

          <div>
            <input
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

        {errors && <ErrorMessage>{errors.schoolSubject?.message}</ErrorMessage>}
      </Content>
    </Dialog.Portal>
  )
}
