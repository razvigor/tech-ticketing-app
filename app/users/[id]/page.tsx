import UserForm from '@/components/UserForm'
import prisma from '@/prisma/db'
import React from 'react'

interface Props {
    params: {
        id: string
    }
}

const EditUser = async ({ params }: Props) => {
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