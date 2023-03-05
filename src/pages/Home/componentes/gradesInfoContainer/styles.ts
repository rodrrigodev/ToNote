import styled from 'styled-components'

interface GradesProps {
  variant: 'good' | 'bad' | 'black'
}

const variant = {
  good: '#00D1FF',
  bad: '#FF4D4D',
  black: '#000',
}

export const Grades = styled.span<GradesProps>`
  color: ${(props) => variant[props.variant]};
`
