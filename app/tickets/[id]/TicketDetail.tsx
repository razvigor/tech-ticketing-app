import TicketPriority from '@/components/TicketPriority'
import TicketStatusBadge from '@/components/TicketStatusBadge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Ticket } from '@prisma/client'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import DeliteButton from './DeliteButton'

interface Props {
    ticket: Ticket
}
const TicketDetail = ({ ticket }: Props) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <div className='flex justify-between mb-3'>
                        <TicketStatusBadge status={ticket.status} />
                        <TicketPriority priority={ticket.priority} />
                    </div>
                    <CardTitle>{ticket.title}</CardTitle>
                    <CardDescription>Created: {ticket.createdAt.toLocaleDateString("sr-RS", {
                        year: '2-digit',
                        month: '2-digit',
                        day: '2-digit',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false
                    })}</CardDescription>
                </CardHeader>
                <CardContent className='prose dark:prose-invert'>
                    <ReactMarkdown>{ticket.description}</ReactMarkdown>
                </CardContent>
                <CardFooter>
                    Updated: {ticket.updatedAt.toLocaleDateString("sr-RS", {
                        year: '2-digit',
                        month: '2-digit',
                        day: '2-digit',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false
                    })}
                </CardFooter>
            </Card>
            <div className='flex gap-x-3 mt-4'>
                <Link href={`/tickets/edit/${ticket.id}`} className={`${buttonVariants({
                    variant: "default",
                    size: "sm",
                })}`}>Edit Ticket</Link>
                <DeliteButton ticket={ticket} />
            </div>
        </>
    )
}

export default TicketDetail