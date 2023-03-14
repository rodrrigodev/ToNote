interface FilterWarnings {
  id: string
  schoolSubject: string
  warning: string
  finished: boolean
  finalDate: Date
}

type search = string | boolean

export function filterWarnings(warning: FilterWarnings[], search: search) {
  const filtered = warning.filter((data) => {
    if (search === 'all' || !search.toString().length) {
      return data
    } else if (!search || search === 'pending' || search === 'pendente') {
      return !data.finished
    } else if (search === 'finished' || search === 'finalizado') {
      return data.finished
    } else {
      return (
        data.schoolSubject
          .toUpperCase()
          .includes(search.toString().toUpperCase()) ||
        data.warning.toUpperCase().includes(search.toString().toUpperCase())
      )
    }
  })

  return filtered
}
