import { useState } from 'react'
import { HomeworkToFinish } from '../HomeworkToFinish'

interface PaginationProps {
  itemsPerPage: number
  dataLength: number
}

export function Pagination({ itemsPerPage, dataLength }: PaginationProps) {
  const [itemOffset, setItemOffset] = useState(0)

  // const currentItems = filteredData.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(dataLength / itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    )
    setItemOffset(newOffset)
  }

  return (
    <ul>
      <li></li>
    </ul>
  )
}
