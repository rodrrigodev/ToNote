import { Trash } from 'phosphor-react'
import {
  DeleteGradeBtn,
  EditContainer,
  SchoolGradesToEdit,
  UpdateBtn,
} from './styles'

export function Edit() {
  return (
    <EditContainer>
      <form>
        <SchoolGradesToEdit>
          <div>
            <span>Português</span>
            <input type="number" placeholder="Nota 1" />
            <input type="number" placeholder="Nota 2" />
            <input type="number" placeholder="Nota 3" />
            <input type="number" placeholder="Nota 4" />
          </div>

          <DeleteGradeBtn>
            <Trash size={32} />
          </DeleteGradeBtn>
          <UpdateBtn type="submit">Atualizar</UpdateBtn>
        </SchoolGradesToEdit>

        <SchoolGradesToEdit>
          <div>
            <span>Português</span>
            <input type="number" placeholder="Nota 1" />
            <input type="number" placeholder="Nota 2" />
            <input type="number" placeholder="Nota 3" />
            <input type="number" placeholder="Nota 4" />
          </div>

          <DeleteGradeBtn>
            <Trash size={32} />
          </DeleteGradeBtn>
          <UpdateBtn type="submit">Atualizar</UpdateBtn>
        </SchoolGradesToEdit>
      </form>
    </EditContainer>
  )
}
