export function calcGrades(data: number[]): number {
  let value
  const filteredGrades = data.filter((y) => {
    return y !== 0
  })

  if (filteredGrades.length > 0) {
    value = filteredGrades.reduce((x, y) => x + y)
  }

  const convert = value ? value / filteredGrades.length : 0

  if (convert.toString().length > 1) {
    if (Number(convert.toString()[2]) > 5) {
      return Math.round(convert)
    } else if (Number(convert.toString()[2]) < 3) {
      return Math.floor(convert)
    } else if (Number(convert.toString()[2]) === 3) {
      return Number(convert.toString()[0] + '.' + 5)
    }
  }
  return Number(convert.toFixed(1))
}
