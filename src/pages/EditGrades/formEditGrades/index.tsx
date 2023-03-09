import { Trash } from 'phosphor-react'
import { Grades } from '../../../contexts/SchoolDataContext'
import { DeleteGradeBtn, SchoolGradesToEdit, UpdateBtn } from './styles'
import { useForm } from 'react-hook-form'

interface GradesProps {
  grades: Grades
  id: string
}

export function FormEditGrades({
  grades: { gradeOne, gradeFour, gradeThree, gradeTwo },
  id,
}: GradesProps) {
  const { register, handleSubmit } = useForm()

  function handleGradesToUpdate(data: any) {
    // const { gradeFour, gradeOne, gradeThree, gradeTwo } = data
    // const ok = getValues()
    // const x = {
    //   gradeOne: gradeOne || 0,
    //   gradeTwo: gradeTwo || 0,
    //   gradeThree: gradeThree || 0,
    //   gradeFour: gradeFour || 0,
    // }
    // setDatabase(x)
    console.log(data, id)

    // setTimeout(console.log(x, id), 2000)
  }

  return (
    <form onSubmit={handleSubmit(handleGradesToUpdate)}>
      <SchoolGradesToEdit>
        <div>
          {/* <span>{schoolSubject}</span> */}
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
