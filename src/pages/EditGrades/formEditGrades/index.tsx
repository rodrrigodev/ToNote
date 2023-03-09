import { Trash } from 'phosphor-react'
import { Grades, SchoolDataContext } from '../../../contexts/SchoolDataContext'
import { DeleteGradeBtn, SchoolGradesToEdit, UpdateBtn } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'

const gradesSchema = z.object({
  gradeOne: z.number().max(10).or(z.nan()).or(z.null()),
  gradeTwo: z.number().max(10).or(z.nan()).or(z.null()),
  gradeThree: z.number().max(10).or(z.nan()).or(z.null()),
  gradeFour: z.number().max(10).or(z.nan()).or(z.null()),
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
  const { schoolData, handleEditSchoolGrades } = useContext(SchoolDataContext)

  const { register, handleSubmit, reset } = useForm<GradesSchema>({
    resolver: zodResolver(gradesSchema),
  })

  function resetData() {
    reset({
      gradeOne: null,
      gradeTwo: null,
      gradeThree,
      gradeFour: null,
    })
  }

  function handleGradesToUpdate(data: GradesSchema) {
    const { gradeFour, gradeOne, gradeThree, gradeTwo } = data

    let x

    const findData = schoolData.find((data) => {
      return data.id === id
    })

    if (findData) {
      const { grades } = findData
      x = {
        gradeOne: gradeOne || grades.gradeOne,
        gradeTwo: gradeTwo || grades.gradeTwo,
        gradeThree: gradeThree || grades.gradeThree,
        gradeFour: gradeFour || grades.gradeFour,
      }

      handleEditSchoolGrades(id, x)
    }
    resetData()
  }

  return (
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

        <DeleteGradeBtn>
          <Trash size={32} />
        </DeleteGradeBtn>
        <UpdateBtn type="submit">Atualizar</UpdateBtn>
      </SchoolGradesToEdit>
    </form>
  )
}
