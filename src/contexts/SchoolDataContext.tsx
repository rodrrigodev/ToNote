import { createContext, ReactNode, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface SchoolData {
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

export interface WarningsData {
  id: string
  schoolSubject: string
  warning: string
  finished: boolean
  finalDate: Date
}

export interface Grades {
  gradeOne: number
  gradeTwo: number
  gradeThree: number
  gradeFour: number
}

interface SchoolDataContextType {
  schoolData: SchoolData[]
  warningsData: WarningsData[]
  handleAddNewSchoolData: (data: SchoolData) => void
  handleUpdateSchoolAbsence: (id: string, quantity: number) => void
  handleEditSchoolGrades: (id: string, grades: Grades) => void
  handleRemoveschoolSubject: (id: string) => void
  handleNewWarning: (data: WarningsData) => void
  handleRemoveWarningAndCheckFinished: (
    id: string,
    type: 'remove' | 'check',
  ) => void
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
      schoolAbsence: 0,
      grades: { gradeOne: 5, gradeTwo: 2, gradeThree: 3, gradeFour: 0 },
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      schoolAbsence: 0,
      grades: { gradeOne: 5, gradeTwo: 8, gradeThree: 2, gradeFour: 0 },
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      schoolAbsence: 0,
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
      schoolSubject: 'Literatura',
      warning: 'II Guerra Mundial',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Geografia',
      warning: 'Guerra na Ucrânia',
      finalDate: new Date(2023, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Educação Fisica',
      warning: 'Copa do Mundo Feminina',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Artes',
      warning: 'Mona Lisa',
      finalDate: new Date(2023, 1, 6),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'História',
      warning: 'Cultura Africana',
      finalDate: new Date(2023, 4, 12),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Química dos alimentos',
      finalDate: new Date(2024, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Bomba atômica',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Matemática',
      warning: 'Números Primos',
      finalDate: new Date(2023, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      warning: 'Historia do EUA',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Química dos alimentos',
      finalDate: new Date(2024, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Bomba atômica',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Matemática',
      warning: 'Números Primos',
      finalDate: new Date(2023, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      warning: 'Historia do EUA',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Química dos alimentos',
      finalDate: new Date(2024, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Bomba atômica',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Matemática',
      warning: 'Números Primos',
      finalDate: new Date(2023, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      warning: 'Historia do EUA',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Química dos alimentos',
      finalDate: new Date(2024, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Bomba atômica',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Matemática',
      warning: 'Números Primos',
      finalDate: new Date(2023, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      warning: 'Historia do EUA',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Química dos alimentos',
      finalDate: new Date(2024, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Bomba atômica',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Matemática',
      warning: 'Números Primos',
      finalDate: new Date(2023, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      warning: 'Historia do EUA',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Química dos alimentos',
      finalDate: new Date(2024, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Bomba atômica',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Matemática',
      warning: 'Números Primos',
      finalDate: new Date(2023, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      warning: 'Historia do EUA',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Química dos alimentos',
      finalDate: new Date(2024, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Bomba atômica',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Matemática',
      warning: 'Números Primos',
      finalDate: new Date(2023, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      warning: 'Historia do EUA',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Química dos alimentos',
      finalDate: new Date(2024, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Bomba atômica',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Matemática',
      warning: 'Números Primos',
      finalDate: new Date(2023, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      warning: 'Historia do EUA',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Química dos alimentos',
      finalDate: new Date(2024, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Bomba atômica',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Matemática',
      warning: 'Números Primos',
      finalDate: new Date(2023, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      warning: 'Historia do EUA',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Química dos alimentos',
      finalDate: new Date(2024, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Bomba atômica',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Matemática',
      warning: 'Números Primos',
      finalDate: new Date(2023, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      warning: 'Historia do EUA',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Química dos alimentos',
      finalDate: new Date(2024, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Química',
      warning: 'Bomba atômica',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Matemática',
      warning: 'Números Primos',
      finalDate: new Date(2023, 1, 1),
      finished: true,
    },
    {
      id: uuidv4(),
      schoolSubject: 'Inglês',
      warning: 'Historia do EUA',
      finalDate: new Date(2023, 4, 5),
      finished: false,
    },
  ])

  function handleAddNewSchoolData(data: SchoolData) {
    setSchoolData((state) => [...state, data])
  }

  function handleUpdateSchoolAbsence(id: string, quantity: number) {
    setSchoolData((state) =>
      state.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            schoolAbsence: data.schoolAbsence + quantity,
          }
        } else {
          return data
        }
      }),
    )
  }

  function handleEditSchoolGrades(id: string, grades: Grades) {
    setSchoolData((state) =>
      state.map((data) => {
        if (data.id === id) {
          return { ...data, grades }
        } else {
          return data
        }
      }),
    )
  }

  function handleRemoveschoolSubject(id: string) {
    const filterSchoolSubject = schoolData.filter((data) => {
      return data.id !== id
    })

    setSchoolData(filterSchoolSubject)
  }

  function handleNewWarning(data: WarningsData) {
    setWarningsData((state) => [...state, data])
  }

  function handleRemoveWarningAndCheckFinished(
    id: string,
    type: 'remove' | 'check',
  ) {
    const filterWarning = warningsData.filter((data) => {
      return data.id !== id
    })

    if (type === 'remove') {
      setWarningsData(filterWarning)
    } else {
      setWarningsData((state) =>
        state.map((data) => {
          if (data.id === id) {
            return {
              ...data,
              finished: !data.finished,
            }
          } else {
            return data
          }
        }),
      )
    }
  }

  return (
    <SchoolDataContext.Provider
      value={{
        schoolData,
        warningsData,
        handleAddNewSchoolData,
        handleUpdateSchoolAbsence,
        handleEditSchoolGrades,
        handleRemoveschoolSubject,
        handleNewWarning,
        handleRemoveWarningAndCheckFinished,
      }}
    >
      {children}
    </SchoolDataContext.Provider>
  )
}
