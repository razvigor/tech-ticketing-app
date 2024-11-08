"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

const FooterNav = ({ role }: { role?: string }) => {
    const links = [
        { href: '/', label: 'Dashboard', adminOnly: false },
        { href: '/users', label: 'Users', adminOnly: true },
        { href: '/tickets', label: 'Tickets', adminOnly: false }, ,
    ]
    const currentPath = usePathname()
    return (
        <>
            {links.filter(link => !link.adminOnly || role === "ADMIN").map((link) => (
                <li key={link.label}>
                    <Link href={link.href} className={`${currentPath === link.href ? ' cursor-default text-primary hover:text-primary/70' : ''}`}>
                        {link.label}
                    </Link>
                </li>
            ))}</>
    )
}

export default FooterNav