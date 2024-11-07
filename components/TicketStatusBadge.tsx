import { Status } from '@prisma/client'
import React from 'react'
import { Badge } from './ui/badge'

interface Props {
    status: Status
}
const statusMap = (status: Status) => {
    switch (status) {
        case 'OPEN':
            return { label: 'Open', color: 'bg-green-500' }
        case 'CLOSED':
            return { label: 'Closed', color: 'bg-red-500' }
        case 'STARTED':
            return { label: 'Started', color: 'bg-yellow-500' }
        default:
            return { label: 'Undefined', color: 'bg-gray-500' }
    }
}
const TicketStatusBadge = ({ status }: Props) => {
    return (
        <Badge className={`${statusMap(status).color} min-w-28 flex justify-center items-center transition-all text-background hover:${statusMap(status).color}/50`}>
            {statusMap(status).label}
        </Badge>
    )
}

export default TicketStatusBadge