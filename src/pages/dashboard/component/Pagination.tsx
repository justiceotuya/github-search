import React from 'react'
import { StyledPagination } from '../style/Pagination.style'
import { IPaginationProps } from '../types'



export const Pagination = (props: IPaginationProps) => {

  const { totalPage, currentPage, handlePageNavigation } = props

  return totalPage > 1 ? (
    <StyledPagination>
      <button disabled={currentPage === 1} onClick={() => handlePageNavigation("PREVIOUS")}>Previous</button>
      <button disabled={currentPage === totalPage} onClick={() => handlePageNavigation("NEXT")}>Next</button>
    </StyledPagination>
  )
    : null
}
