import { ticketShema } from "@/ValidationSchemas/ticket";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db";

interface Props {
    params: {
        id: string
    }
}

export async function PATCH(request: NextRequest, { params }: Props) {
    const body = await request.json();
    const validation = ticketShema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 });
    }
    const ticket = await prisma?.ticket.findUnique({
        where: { id: parseInt(params.id) }
    })
    if (!ticket) {
        return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    };
    const updatedTicket = await prisma?.ticket.update({
        where: { id: ticket.id },
        data: { ...body }
    })
    return NextResponse.json(updatedTicket, { status: 201 });
}

export async function DELETE(request: NextRequest, { params }: Props) {
    const ticket = await prisma?.ticket.findUnique({
        where: { id: parseInt(params.id) }
    })
    if (!ticket) {
        return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    };
    await prisma?.ticket.delete({
        where: { id: ticket.id }
    })
    return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
}