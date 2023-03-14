import { intlFormatDistance } from 'date-fns'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import {
  SchoolDataContext,
  WarningsData,
} from '../../../../contexts/SchoolDataContext'
import { HomeworkToFinishList } from './styles'

interface HomeworkToFinishProps {
  data: WarningsData
}

export function HomeworkToFinish({ data }: HomeworkToFinishProps) {
  const { handleRemoveWarningAndCheckFinished } = useContext(SchoolDataContext)
  return (
    <HomeworkToFinishList
      variant={data.finished ? 'finished' : 'notFinished'}
      onClick={() => handleRemoveWarningAndCheckFinished(data.id, 'check')}
    >
      <span>{data.schoolSubject}</span>
      <span>{data.warning}</span>
      <span>
        {intlFormatDistance(data.finalDate, new Date(), {
          locale: 'pt',
        })}
      </span>
      <button
        type="button"
        onClick={() => handleRemoveWarningAndCheckFinished(data.id, 'remove')}
      >
        <Trash size={32} />
      </button>
    </HomeworkToFinishList>
  )
}
