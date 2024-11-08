import options from '@/app/api/auth/[...nextauth]/options'
import UserForm from '@/components/UserForm'
import prisma from '@/prisma/db'
import { getServerSession } from 'next-auth'
import React from 'react'

interface Props {
    params: {
        id: string
    }
}

const EditUser = async ({ params }: Props) => {

    const session = await getServerSession(options)

    if (session?.user.role !== "ADMIN") {
        return (
            <div className="h-96 flex justify-center items-center">
                <h1 className="text-2xl font-bold text-destructive">You are not authorized to view this page.</h1>
            </div>
        )
    }

    const user = await prisma?.user.findUnique({
        where: {
            id: parseInt(params.id)
        },

    })
    if (!user) {
        return (
            <div className='text-destructive'>User not found</div>
        )
    }
    user.password = ''
    return (
        <UserForm user={user} />
    )
}

export default EditUser