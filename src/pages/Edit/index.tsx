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
  const { handleAddNewSchoolData, schoolData } = useContext(SchoolDataContext)

  return (
    <EditContainer>
      <form>
        {schoolData.map((data) => {
          return (
            <SchoolGradesToEdit key={data.id}>
              <div>
                <span>Português</span>
                <input type="number" placeholder="1º Nota" />
                <input type="number" placeholder="2º Nota" />
                <input type="number" placeholder="3º Nota" />
                <input type="number" placeholder="4º Nota" />
              </div>

              <DeleteGradeBtn>
                <Trash size={32} />
              </DeleteGradeBtn>
              <UpdateBtn type="submit">Atualizar</UpdateBtn>
            </SchoolGradesToEdit>
          )
        })}
      </form>
    </EditContainer>
  )
}
