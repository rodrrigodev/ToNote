import fireWorks from '../../../../assets/fireworks.svg'
import { FireWorksContainer } from './styles'

export function FireWorks() {
  return (
    <FireWorksContainer>
      <div>
        <p>Ops, será que estamos de férias?</p>
        <p>
          Click em <span>Nova Matéria</span> para começar!
        </p>
      </div>
      <img src={fireWorks} alt="" />
    </FireWorksContainer>
  )
}
