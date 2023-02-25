import { createContext, ReactNode, useState } from 'react'

interface SchoolData {
  id: number
  schoolSubjects: string
  schoolAbsence: number
  grades: number[]
}

interface SchoolDataContextType {
  schoolData: SchoolData[]
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
      schoolAbsence: 0,
      grades: [5, 2, 3],
    },
    {
      id: 3,
      schoolSubjects: 'Inglês',
      schoolAbsence: 0,
      grades: [5, 8, 2],
    },
    {
      id: 4,
      schoolSubjects: 'Inglês',
      schoolAbsence: 0,
      grades: [5, 8, 2],
    },
  ])

  return (
    <SchoolDataContext.Provider value={{ schoolData }}>
      {children}
    </SchoolDataContext.Provider>
  )
}
