"use client"
import React from 'react'
import { Button } from './ui/button'
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'

interface Props {
    itemCount: number,
    pageSize: number,
    currentPage: number,

}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {

    const pageCount = Math.ceil(itemCount / pageSize)
    const router = useRouter()
    const searchParams = useSearchParams()
    if (pageCount === 1) return null


    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', page.toString())
        router.push(`?${params.toString()}`)
    }



    return (
        <div className='mt-4'>
            <div className='flex'>
                <Button variant="outline" disabled={currentPage === 1} onClick={() => handlePageChange(1)}><ChevronFirst /></Button>
                <Button variant="outline" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}><ChevronLeft /></Button>
                <Button variant="outline" disabled={currentPage === pageCount} onClick={() => handlePageChange(currentPage + 1)}><ChevronRight /></Button>
                <Button variant="outline" disabled={currentPage === pageCount} onClick={() => handlePageChange(pageCount)}><ChevronLast /></Button>
            </div>
            <div className='mt-2'>
                <p>Page {currentPage} of {pageCount}</p>
            </div>
        </div>
    )
}

export default Pagination