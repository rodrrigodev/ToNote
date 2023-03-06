import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'
import {
  DeleteGradeBtn,
  EditContainer,
  SchoolGradesToEdit,
  UpdateBtn,
} from './styles'

export function Edit() {
  const { schoolData } = useContext(SchoolDataContext)

  return (
    <EditContainer>
      {schoolData.map((data) => {
        const {
          grades: { gradeOne, gradeTwo, gradeThree, gradeFour },
        } = data
        return (
          <form key={data.id}>
            <SchoolGradesToEdit>
              <div>
                <span>Português</span>
                <input
                  value={gradeOne || ''}
                  type="number"
                  placeholder="1º Nota"
                />
                <input
                  value={gradeTwo || ''}
                  type="number"
                  placeholder="2º Nota"
                />
                <input
                  value={gradeThree || ''}
                  type="number"
                  placeholder="3º Nota"
                />
                <input
                  value={gradeFour || ''}
                  type="number"
                  placeholder="4º Nota"
                />
              </div>

              <DeleteGradeBtn>
                <Trash size={32} />
              </DeleteGradeBtn>
              <UpdateBtn type="submit">Atualizar</UpdateBtn>
            </SchoolGradesToEdit>
          </form>
        )
      })}
    </EditContainer>
  )
}
