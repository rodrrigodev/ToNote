import { createContext, ReactNode, useState } from 'react'

interface SchoolData {
  id: number
  schoolSubjects: string
  schoolAbsence: number
  n1?: number
  n2?: number
  n3?: number
  n4?: number
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
      n1: undefined,
      n2: 5,
      n3: 5,
      n4: 5,
    },
  ])

  return (
    <SchoolDataContext.Provider value={{ schoolData }}>
      {children}
    </SchoolDataContext.Provider>
  )
}
