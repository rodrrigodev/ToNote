import { useContext, useState } from 'react'
import {
  SchoolData,
  SchoolDataContext,
} from '../../../../contexts/SchoolDataContext'
import { AddBtn, IncreseAndDecrease, PlusAndMinusBtn } from './style'
import { Minus, Plus } from 'phosphor-react'

interface AbsenceContainerProps {
  data: SchoolData
}

export function AbsenceContainer({ data }: AbsenceContainerProps) {
  const { id } = data
  const { handleUpdateSchoolAbsence } = useContext(SchoolDataContext)

  const [absenceToUpdate, setAbsenceToUpdate] = useState(1)
  const btnDisabled = absenceToUpdate === 1

  function updateAbsence() {
    handleUpdateSchoolAbsence(id, absenceToUpdate)
    setAbsenceToUpdate(1)
  }

  return (
    <IncreseAndDecrease>
      <span>{data.schoolSubject}:</span>

      <div>
        <PlusAndMinusBtn
          onClick={() => setAbsenceToUpdate(absenceToUpdate + 1)}
        >
          <Plus size={32} />
        </PlusAndMinusBtn>

        <input type="number" value={absenceToUpdate} readOnly />

        <PlusAndMinusBtn
          onClick={() => setAbsenceToUpdate(absenceToUpdate - 1)}
          disabled={btnDisabled}
        >
          <Minus size={32} />
        </PlusAndMinusBtn>
      </div>

      <AddBtn type="button" onClick={() => updateAbsence()}>
        Adicionar
      </AddBtn>
    </IncreseAndDecrease>
  )
}
