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
export const GradesAndSubjectContainer = styled.div`
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    padding: 1.0625rem 0 0rem 0 !important;

    span {
      width: 4rem !important;
      text-align: center;
    }
  }
`
