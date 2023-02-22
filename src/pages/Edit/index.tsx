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

        <SchoolGradesToEdit>
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
      </form>
    </EditContainer>
  )
}
