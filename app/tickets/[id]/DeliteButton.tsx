"use client"
import { Button, buttonVariants } from '@/components/ui/button';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import { DeleteIcon } from 'lucide-react';

interface Props {
    ticket: {
        id: number;
    }
}
const DeliteButton = ({ ticket }: Props) => {

    const router = useRouter();
    const pathname = usePathname();
    const [error, setError] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    const deleteTicket = async () => {
        try {
            setIsDeleting(true)
            const response = await axios.delete(`/api/tickets/${ticket.id}`)

            if (response) {
                router.push('/tickets')
                router.refresh()
            } else {
                setError('Failed to delete ticket')
            }
        } catch (error) {
            setIsDeleting(false)
            setError('Failed to delete ticket.')
        }
        setIsDeleting(false)
    }

    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant='destructive' size="sm"
                    >{pathname === '/tickets' ? <DeleteIcon /> : "Delite Ticket"}</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            ticket.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className={`${buttonVariants({
                            variant: "destructive",
                            size: "sm",
                        })}`}
                            disabled={isDeleting}
                            onClick={deleteTicket}
                        >Delite</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <div className='text-descrutive'>{error}</div>
        </>
    )
}

export default DeliteButton