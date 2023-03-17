import { Trash } from 'phosphor-react'
import { Grades, SchoolDataContext } from '../../../contexts/SchoolDataContext'
import {
  DeleteGradeBtn,
  ErrorMessage,
  SchoolGradesToEdit,
  UpdateBtn,
} from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { toast } from 'react-toastify'

const notify = () => {
  toast.success('Nota atualizada!', {
    position: toast.POSITION.TOP_RIGHT,
  })
}

const zSchema = z
  .number()
  .max(10, { message: 'A nota deve ser menor ou igual a 10' })
  .or(z.nan())
  .or(z.null())

const gradesSchema = z.object({
  gradeOne: zSchema,
  gradeTwo: zSchema,
  gradeThree: zSchema,
  gradeFour: zSchema,
})

type GradesSchema = z.infer<typeof gradesSchema>

interface GradesProps {
  grades: Grades
  id: string
  schoolSubject: string
}

export function FormEditGrades({
  grades: { gradeOne, gradeFour, gradeThree, gradeTwo },
  id,
  schoolSubject,
}: GradesProps) {
  const { schoolData, handleEditSchoolGrades, handleRemoveschoolSubject } =
    useContext(SchoolDataContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GradesSchema>({
    resolver: zodResolver(gradesSchema),
  })

  function resetData() {
    reset({
      gradeOne: null,
      gradeTwo: null,
      gradeThree: null,
      gradeFour: null,
    })
  }

  function handleGradesToUpdate(data: GradesSchema) {
    const { gradeFour, gradeOne, gradeThree, gradeTwo } = data

    let gradesToAdd

    const findData = schoolData.find((data) => {
      return data.id === id
    })

    if (findData) {
      const { grades } = findData
      gradesToAdd = {
        gradeOne: gradeOne || grades.gradeOne,
        gradeTwo: gradeTwo || grades.gradeTwo,
        gradeThree: gradeThree || grades.gradeThree,
        gradeFour: gradeFour || grades.gradeFour,
      }
      if (gradeOne || gradeTwo || gradeThree || gradeFour) {
        handleEditSchoolGrades(id, gradesToAdd)
        notify()
      }
    }
    resetData()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleGradesToUpdate)}>
        <SchoolGradesToEdit>
          <div>
            <span>{schoolSubject}</span>
            <input
              type="number"
              placeholder={gradeOne ? gradeOne.toString() : '1ª Nota'}
              {...register('gradeOne', {
                valueAsNumber: true,
              })}
            />
            <input
              type="number"
              placeholder={gradeTwo ? gradeTwo.toString() : '2ª Nota'}
              {...register('gradeTwo', {
                valueAsNumber: true,
              })}
            />
            <input
              type="number"
              placeholder={gradeThree ? gradeThree.toString() : '3ª Nota'}
              {...register('gradeThree', {
                valueAsNumber: true,
              })}
            />
            <input
              type="number"
              placeholder={gradeFour ? gradeFour.toString() : '4ª Nota'}
              {...register('gradeFour', {
                valueAsNumber: true,
              })}
            />
          </div>

          <DeleteGradeBtn onClick={() => handleRemoveschoolSubject(id)}>
            <Trash size={32} />
          </DeleteGradeBtn>
          <UpdateBtn type="submit">Atualizar</UpdateBtn>
        </SchoolGradesToEdit>
      </form>
      {errors && <ErrorMessage>{errors.gradeOne?.message}</ErrorMessage>}
      {errors && <ErrorMessage>{errors.gradeTwo?.message}</ErrorMessage>}
      {errors && <ErrorMessage>{errors.gradeThree?.message}</ErrorMessage>}
      {errors && <ErrorMessage>{errors.gradeFour?.message}</ErrorMessage>}
    </div>
  )
}
