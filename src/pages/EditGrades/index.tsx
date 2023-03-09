import { useContext } from 'react'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'
import { EditContainer } from './styles'
import { FormEditGrades } from './formEditGrades'

export function Edit() {
  const { schoolData } = useContext(SchoolDataContext)

  return (
    <EditContainer>
      {schoolData.map((data) => {
        return (
          <FormEditGrades key={data.id} grades={data.grades} id={data.id} />
        )
      })}
    </EditContainer>
  )
}
