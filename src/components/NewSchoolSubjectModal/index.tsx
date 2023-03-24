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

const zGrade = z
  .number()
  .max(10, { message: 'Digite um valor menor ou igual a 10' })
  .or(z.nan())
  .or(z.null())

const newSchoolSubjectSchema = z.object({
  schoolSubject: z.string().min(3),
  gradeOne: zGrade,
  gradeTwo: zGrade,
  gradeThree: zGrade,
  gradeFour: zGrade,
})

type SchoolSubjectSchema = z.infer<typeof newSchoolSubjectSchema>

export function NewSchoolSubjectModal() {
  const { handleAddNewSchoolData } = useContext(SchoolDataContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
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

  const schoolSubject = watch('schoolSubject')
  const schoolSubjectIsEmpty = schoolSubject ? schoolSubject.length >= 3 : false

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
          <button type="submit" disabled={!schoolSubjectIsEmpty}>
            Salvar
          </button>
        </form>

        {errors && <ErrorMessage>{errors.gradeOne?.message}</ErrorMessage>}
        {errors && <ErrorMessage>{errors.gradeTwo?.message}</ErrorMessage>}
        {errors && <ErrorMessage>{errors.gradeThree?.message}</ErrorMessage>}
        {errors && <ErrorMessage>{errors.gradeFour?.message}</ErrorMessage>}
      </Content>
    </Dialog.Portal>
  )
}
