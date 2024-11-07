import React from 'react'
import prisma from '@/prisma/db'
import TicketDetail from './TicketDetail'

interface Props {
    params: {
        id: string
    }
}

const ViewTicket = async ({ params }: Props) => {
    const ticket = await prisma.ticket.findUnique({
        where: { id: parseInt(params.id) }
    })
    if (!ticket) {
        return <div className='text-destructive'>Ticket not found!</div>
    }
    return (
        <div>
            <TicketDetail ticket={ticket} />
        </div>
    )
}

export default ViewTicket