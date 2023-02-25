export function CalcGrades(grade: number[]): number {
  const x = grade.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  )

  const y = x / grade.length

  return Math.floor(Number(y.toFixed(1)))
}
