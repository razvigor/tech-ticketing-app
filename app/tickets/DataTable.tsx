import TicketPriority from '@/components/TicketPriority'
import TicketStatusBadge from '@/components/TicketStatusBadge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Ticket } from '@prisma/client'
import { ArrowDown, Pen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import DeliteButton from './[id]/DeliteButton'
import { SearchParams } from './page'

interface Props {
    tickets: Ticket[]
    searchParams: SearchParams
}

const DataTable = ({ tickets, searchParams }: Props) => {
    return (
        <div className='w-full mt-5'>
            <div className='rounded-md sm:border'>
                <Table>
                    <TableHeader>
                        <TableRow className='bg-secondary hover:bg-secondary'>
                            <TableHead><Link href={{ query: { ...searchParams, orderBy: 'title' } }}>Title</Link>{"title" === searchParams?.orderBy && (<ArrowDown className='inline p-1' />)}</TableHead>
                            <TableHead><Link href={{ query: { ...searchParams, orderBy: 'status' } }}>Status</Link>{'status' === searchParams?.orderBy && (<ArrowDown className='inline p-1' />)}</TableHead>
                            <TableHead><Link href={{ query: { ...searchParams, orderBy: 'priority' } }}>Priority</Link>{'priority' === searchParams?.orderBy && (<ArrowDown className='inline p-1' />)}</TableHead>
                            <TableHead><Link href={{ query: { ...searchParams, orderBy: 'createdAt' } }}>Created At</Link>{'createdAt' === searchParams?.orderBy && (<ArrowDown className='inline p-1' />)}</TableHead>
                            <TableHead className='text-center'>Edit / Delite</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tickets ? tickets.map((ticket) => (
                            <TableRow key={ticket.id} data-href='/'>
                                <TableCell><Link href={`/tickets/${ticket.id}`} className='hover:text-primary'>{ticket.title}</Link></TableCell>
                                <TableCell><TicketStatusBadge status={ticket.status} /></TableCell>
                                <TableCell><TicketPriority priority={ticket.priority} /></TableCell>
                                <TableCell>{ticket.createdAt.toLocaleDateString("sr-RS", {
                                    year: '2-digit',
                                    month: '2-digit',
                                    day: '2-digit',
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    second: 'numeric',
                                    hour12: false
                                })}</TableCell>
                                <TableCell className='flex gap-x-2 items-center justify-end'>
                                    <Link href={`/tickets/edit/${ticket.id}`} className={buttonVariants({ variant: "outline", size: "icon" })}><Pen /></Link>
                                    <DeliteButton ticket={ticket} />
                                </TableCell>
                            </TableRow>
                        )) : null}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default DataTable