import UserForm from "@/components/UserForm"
import DataTableSimple from "./data-table-simple"
import prisma from "@/prisma/db"
import { getServerSession } from "next-auth"
import options from "../api/auth/[...nextauth]/options"

const Users = async () => {
    const session = await getServerSession(options)

    if (session?.user.role !== "ADMIN") {
        return (
            <div className="h-96 flex justify-center items-center">
                <h1 className="text-2xl font-bold text-destructive">You are not authorized to view this page.</h1>
            </div>
        )
    }

    const users = await prisma?.user.findMany()
    return (
        <>
            <UserForm />
            <DataTableSimple users={users} />
        </>
    )
}

export default Users