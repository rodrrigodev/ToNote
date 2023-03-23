import {
  GradesAndWarningsContainer,
  GradesInfoContainer,
  ItensDescriptions,
} from './styles'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { SchoolDataContext } from '../../contexts/SchoolDataContext'
import { GradesInfo } from './components/GradesInfo/intex'
import { Warnings } from './components/Warnings/index'
import { FireWorks } from './components/FireWorks'
import { NoWarnings } from './components/NoWarnings'

export function Home() {
  const { schoolData, warningsData } = useContext(SchoolDataContext)
  const warningsExists = warningsData.find((data) => {
    return !data.finished
  })

  return (
    <GradesAndWarningsContainer>
      {schoolData.length > 0 ? (
        <GradesInfoContainer>
          <div>
            <span>Matéria</span>
            <span>N1</span>
            <span>N2</span>
            <span>N3</span>
            <span>N4</span>
            <span>Média</span>
          </div>

          <ItensDescriptions>
            <span>N1</span>
            <span>N2</span>
            <span>N3</span>
            <span>N4</span>
            <span>Média</span>
          </ItensDescriptions>

          {schoolData.map((data) => {
            return <GradesInfo key={data.id} info={data} />
          })}

          <Link to="/edit">Editar</Link>
        </GradesInfoContainer>
      ) : (
        <FireWorks />
      )}

      {warningsExists ? <Warnings /> : <NoWarnings />}
    </GradesAndWarningsContainer>
  )
}
