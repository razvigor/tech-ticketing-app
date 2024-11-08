import UserForm from "@/components/UserForm"
import DataTableSimple from "./data-table-simple"
import prisma from "@/prisma/db"

const Users = async () => {
    const users = await prisma?.user.findMany()
    return (
        <>
            <UserForm />
            <DataTableSimple users={users} />
        </>
    )
}

export default Users