import { createContext, ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const notify = (type: 'deleted' | 'success') => {
  type === 'success'
    ? toast.success('Salvo com sucesso!')
    : toast.error('Deletado com sucesso!', {
        icon: '🗑️',
      })
}
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
  const schoolDataIsEmpty = localStorage.getItem('@toNote:schoolDatabase-1.0.1')
  const schoolDataGet = schoolDataIsEmpty
    ? JSON.parse(schoolDataIsEmpty)
    : false
  const [schoolData, setSchoolData] = useState<SchoolData[]>(
    schoolDataGet.schoolData ? schoolDataGet.schoolData : [],
  )

  const [warningsData, setWarningsData] = useState<WarningsData[]>(
    schoolDataGet.warningsData ? schoolDataGet.warningsData : [],
  )

  function handleAddNewSchoolData(data: SchoolData) {
    setSchoolData((state) => [...state, data])
    notify('success')
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
    toast.success(
      quantity > 1
        ? `${quantity} faltas adicionadas com sucesso`
        : `${quantity} falta adicionada com sucesso`,
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
    notify('deleted')
  }

  function handleNewWarning(data: WarningsData) {
    setWarningsData((state) => [...state, data])
    notify('success')
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
      notify('deleted')
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

  useEffect(() => {
    const database = JSON.stringify({ schoolData, warningsData })
    localStorage.setItem('@toNote:schoolDatabase-1.0.1', database)
  }, [schoolData, warningsData])

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
