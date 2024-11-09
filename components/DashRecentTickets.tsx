import { Prisma } from '@prisma/client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import TicketStatusBadge from './TicketStatusBadge'
import Link from 'next/link'
import TicketPriority from './TicketPriority'

type TicketWithUser = Prisma.TicketGetPayload<{
    include: { assignedToUser: true }
}>

interface Props {
    tickets: TicketWithUser[]
}

const DashRecentTickets = ({ tickets }: Props) => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Recently Updated</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">{tickets ? tickets.map(ticket => (
                        <div key={ticket.id} className='flex items-start'>
                            <div className="self-center">
                                <TicketStatusBadge status={ticket.status} />
                            </div>
                            <div className="ml-4 space-y-1">
                                <Link href={`tickets/${ticket.id}`}>
                                    <p>{ticket.title}</p>
                                    <p>{ticket.assignedToUser?.name || "Unassigned"}</p>
                                </Link>
                            </div>
                            <div className='ml-auto font-medium'>
                                <TicketPriority priority={ticket.priority} />
                            </div>
                        </div>
                    )) : null}</div>
                </CardContent>
            </Card>
        </div>
    )
}

export default DashRecentTickets