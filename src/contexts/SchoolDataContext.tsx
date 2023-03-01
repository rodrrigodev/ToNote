import { createContext, ReactNode, useState } from 'react'

interface SchoolData {
  id: number
  schoolSubjects: string
  schoolAbsence: number
  grades: { n1?: number; n2?: number; n3?: number; n4?: number }
  finalGrade?: number
}

interface WarningsData {
  id: number
  schoolSubjects: string
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
      id: 1,
      schoolSubjects: 'Português',
      schoolAbsence: 0,
      grades: { n1: 5, n2: 4, n3: 8 },
      finalGrade: 5.5,
    },
    {
      id: 2,
      schoolSubjects: 'Matematica',
      schoolAbsence: 1,
      grades: { n1: 5, n2: 2, n3: 3 },
      finalGrade: 3.5,
    },
    {
      id: 3,
      schoolSubjects: 'Inglês',
      schoolAbsence: 2,
      grades: { n1: 5, n2: 8, n3: 2 },
      finalGrade: 5,
    },
    {
      id: 4,
      schoolSubjects: 'Inglês',
      schoolAbsence: 3,
      grades: { n1: 5, n2: 5, n3: 10 },
      finalGrade: 6.5,
    },
  ])

  const [warningsData, setWarningsData] = useState<WarningsData[]>([
    {
      id: 1,
      schoolSubjects: 'Português',
      warning: 'Literatura na sociedade',
      finalDate: new Date(2023, 1, 1),
      finished: true,
    },
    {
      id: 2,
      schoolSubjects: 'Literutura',
      warning: 'II Guerra Mundial',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
  ])

  function handleAddNewSchoolData(data: SchoolData) {
    const id = schoolData.length

    setSchoolData((state) => [
      ...state,
      {
        id,
        schoolAbsence: 0,
        schoolSubjects: data.schoolSubjects,
        grades: data.grades,
      },
    ])
  }

  return (
    <SchoolDataContext.Provider
      value={{ schoolData, warningsData, handleAddNewSchoolData }}
    >
      {children}
    </SchoolDataContext.Provider>
  )
}
