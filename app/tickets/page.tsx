import prisma from '@/prisma/db'
import DataTable from './DataTable'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import Pagination from '@/components/Pagination'
import StatusFilter from '@/components/StatusFilter'
import { Status, Ticket } from '@prisma/client'

export interface SearchParams {
    status: Status
    page: string
    orderBy: keyof Ticket
}

const Tickets = async ({ searchParams }: { searchParams: SearchParams }) => {
    const pageSize = 10
    const page = parseInt(searchParams?.page) || 1
    const orderBy = searchParams?.orderBy || 'createdAt'
    const statuses = Object.values(Status)
    const satus = statuses.includes(searchParams?.status) ? searchParams.status : undefined


    let where = {}
    if (satus) {
        where = {
            status: satus
        }
    } else {
        where = {
            NOT: [{ status: "CLOSED" as Status }]
        }
    }

    const ticketCount = await prisma.ticket.count({ where })
    const tickets = await prisma.ticket.findMany({
        where,
        orderBy: {
            [orderBy]: 'desc'
        },
        take: pageSize,
        skip: (page - 1) * pageSize,

    })


    return (
        <>
            <div className='flex justify-between'>
                <Link href='/tickets/new' className={buttonVariants({ variant: 'default' })}>New Ticket</Link>
                <StatusFilter />
            </div>
            <DataTable tickets={tickets} searchParams={searchParams} />
            <Pagination itemCount={ticketCount} pageSize={pageSize} currentPage={page} />
        </>
    )
}

export default Tickets