import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { User } from '@prisma/client'
import Link from 'next/link'

interface Props {
    users: User[]
}

const UserDataTable = ({ users }: Props) => {
    return (
        <div className='w-full mt-5'>
            <div className='rounded-md sm:border'>
                <Table>
                    <TableHeader>
                        <TableRow className='bg-secondary hover:bg-secondary'>
                            <TableHead className='font-medium'>Name</TableHead>
                            <TableHead className='font-medium'>UserName</TableHead>
                            <TableHead className='font-medium'>Role</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users ? users.map((user) => (
                            <TableRow key={user.id} data-href="/">
                                <TableCell><Link href={`/users/${user.id}`} className='hover:text-primary'>{user.name}</Link></TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.role}</TableCell>
                            </TableRow>
                        )) : null}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default UserDataTable