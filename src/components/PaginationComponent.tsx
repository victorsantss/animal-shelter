'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationComponentProps {
  previousPageFunction: () => void
  nextPageFunction: () => void
  currentPage: number
  numberOfPages: number
}

export function PaginationComponent(
  {
    previousPageFunction,
    nextPageFunction,
    currentPage,
    numberOfPages,
  }: PaginationComponentProps) {

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numberOfPages;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={isFirstPage ? "opacity-30" : ""}
            onClick={previousPageFunction}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={isLastPage ? "opacity-30" : ""}
            onClick={nextPageFunction}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
