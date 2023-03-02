import { createContext, ReactNode, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface SchoolData {
  id: string
  schoolSubject: string
  schoolAbsence: number
  grades: {
    gradeOne: number
    gradeTwo: number
    gradeThree: number
    gradeFour: number
  }
}

interface WarningsData {
  id: string
  schoolSubject: string
  warning: string
  finished: boolean
  finalDate: Date
}

interface SchoolDataContextType {
  schoolData: SchoolData[]
  warningsData: WarningsData[]
  handleAddNewSchoolData: (data: SchoolData) => void
}

export const SchoolDataContext = createContext({} as SchoolDataContextType)

interface SchoolDataContextProviderProps {
  children: ReactNode
}

export function SchoolDataContextProvider({
  children,
}: SchoolDataContextProviderProps) {
  const [schoolData, setSchoolData] = useState<SchoolData[]>([
    {
      id: uuidv4(),
      schoolSubject: 'Português',
      schoolAbsence: 0,
      grades: { gradeOne: 0, gradeTwo: 4, gradeThree: 8, gradeFour: 0 },
    },
    {
      id: uuidv4(),
      schoolSubject: 'Matematica',
      schoolAbsence: 1,
      grades: { gradeOne: 5, gradeTwo: 2, gradeThree: 3, gradeFour: 0 },
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      schoolAbsence: 2,
      grades: { gradeOne: 5, gradeTwo: 8, gradeThree: 2, gradeFour: 0 },
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      schoolAbsence: 3,
      grades: { gradeOne: 5, gradeTwo: 5, gradeThree: 10, gradeFour: 0 },
    },
  ])

  const [warningsData, setWarningsData] = useState<WarningsData[]>([
    {
      id: uuidv4(),
      schoolSubject: 'Português',
      warning: 'Literatura na sociedade',
      finalDate: new Date(2023, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Literutura',
      warning: 'II Guerra Mundial',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
  ])

  function handleAddNewSchoolData(data: SchoolData) {
    setSchoolData((state) => [...state, data])
  }

  return (
    <SchoolDataContext.Provider
      value={{ schoolData, warningsData, handleAddNewSchoolData }}
    >
      {children}
    </SchoolDataContext.Provider>
  )
}
