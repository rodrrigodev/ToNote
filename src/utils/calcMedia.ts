export function calcGrades(data: number[]): number {
  let value
  const x = data.filter((y) => {
    return y !== 0
  })

  if (x.length > 0) {
    value = x.reduce((x, y) => x + y)
  }

  const convert = value ? value / x.length : 0

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
