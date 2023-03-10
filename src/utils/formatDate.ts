import dayjs from 'dayjs'

export function formatDate(data: string) {
  const day = data.slice(0, 2)
  const month = Number(data.slice(3, 5))
  const year = Number(data.slice(6, 10))
  const convert = new Date(`${month}/${day}/${year}`)
  const isValid = dayjs(convert).isValid()

  return isValid ? convert : false
}
