import { useState } from 'react'
import { SchoolData } from '../../../../contexts/SchoolDataContext'
import { AddBtn, IncreseAndDecrease } from './style'
import { Minus, Plus } from 'phosphor-react'

interface AbsenceContainerProps {
  data: SchoolData
}

export function AbsenceContainer({ data }: AbsenceContainerProps) {
  const [absenceToUpdate, setAbsenceToUpdate] = useState(1)

  return (
    <IncreseAndDecrease>
      <span>{data.schoolSubject}:</span>

      <div>
        <button>
          <Plus size={32} />
        </button>

        <input type="number" value={absenceToUpdate} readOnly />

        <button>
          <Minus size={32} />
        </button>
      </div>

      <AddBtn type="button">Adicionar</AddBtn>
    </IncreseAndDecrease>
  )
}
