export function CalcGrades(grade: number[]): number | null {
  let value = 0
  const x = grade.filter((x) => {
    return x !== undefined
  })

  x.forEach((x) => {
    value += x
  })

  return x ? value / x.length : null
}
