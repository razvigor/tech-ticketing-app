import { Priority } from "@prisma/client"
import { Flame } from "lucide-react";

interface Props {
    priority: Priority
}

const priorityMap = (priority: Priority) => {
    switch (priority) {
        case Priority.LOW:
            return { label: 'Low', level: 1 };
        case Priority.MEDIUM:
            return { label: 'Medium', level: 2 };
        case Priority.HIGH:
            return { label: 'High', level: 3 };
        default:
            return { label: 'Undefined', level: 0 };
    }
}

const TicketPriority = ({ priority }: Props) => {
    return (
        <div className="flex gap-2 items-center">
            <Flame className={`${priorityMap(priority).level >= 1 ? "text-red-500" : "text-muted"}`} />
            <Flame className={`${priorityMap(priority).level >= 2 ? "text-red-500" : "text-muted"}`} />
            <Flame className={`${priorityMap(priority).level >= 3 ? "text-red-500" : "text-muted"}`} />
        </div>
    )
}

export default TicketPriority