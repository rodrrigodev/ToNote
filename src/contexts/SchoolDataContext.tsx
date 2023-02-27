import { createContext, ReactNode, useState } from 'react'

interface SchoolData {
  id: number
  schoolSubjects: string
  schoolAbsence: number
  grades: number[]
}

interface WarningsData {
  id: number
  schoolSubjects: string
  warning: string
  finalDate: Date
}

interface SchoolDataContextType {
  schoolData: SchoolData[]
  warningsData: WarningsData[]
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
      grades: [2],
    },
    {
      id: 2,
      schoolSubjects: 'Matematica',
      schoolAbsence: 1,
      grades: [5, 2, 3],
    },
    {
      id: 3,
      schoolSubjects: 'Inglês',
      schoolAbsence: 2,
      grades: [5, 8, 2],
    },
    {
      id: 4,
      schoolSubjects: 'Inglês',
      schoolAbsence: 3,
      grades: [5, 8, 2],
    },
  ])

  const [warningsData, setWarningsData] = useState<WarningsData[]>([
    {
      id: 1,
      schoolSubjects: 'Português',
      warning: 'Literatura na sociedade',
      finalDate: new Date(2023, 11, 17),
    },
  ])

  return (
    <SchoolDataContext.Provider value={{ schoolData, warningsData }}>
      {children}
    </SchoolDataContext.Provider>
  )
}
