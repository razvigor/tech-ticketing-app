"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

const FooterNav = () => {
    const links = [
        { href: '/', label: 'Dashboard' },
        { href: '/users', label: 'Users' },
        { href: '/tickets', label: 'Tickets' },
    ]
    const currentPath = usePathname()
    return (
        <>
            {links.map((link) => (
                <li key={link.label}>
                    <Link href={link.href} className={`${currentPath === link.href ? ' cursor-default text-primary hover:text-primary/70' : ''}`}>
                        {link.label}
                    </Link>
                </li>
            ))}</>
    )
}

export default FooterNav