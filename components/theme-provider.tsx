"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
interface ThemeProviderProps {
    children: JSX.Element | JSX.Element[];
    props: {
        attribute: string;
        defaultTheme: string;
        value: string;
        enableSystem: boolean;
        disableTransitionOnChange: boolean;
    }
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
