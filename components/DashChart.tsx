"use client"

import React from 'react';
import { Status } from '@prisma/client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface dataProps {
    data: dataElements[]
}

interface dataElements {
    name: Status,
    total: number
}


const DashChart = ({ data }: dataProps) => {
    const tooltipStyles = { backgroundColor: '#000000' }
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Ticket Counts</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" stroke="#00FF00" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#00FF00" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip wrapperStyle={tooltipStyles} />
                            <Legend />
                            <Bar dataKey="total" fill="#00FF00" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

        </>
    )
}

export default DashChart