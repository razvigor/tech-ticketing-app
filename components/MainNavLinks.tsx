'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MainNavLinks = ({ role }: { role?: string }) => {
    const links = [
        { href: '/', label: 'Dashboard', adminOnly: false },
        { href: '/users', label: 'Users', adminOnly: true },
        { href: '/tickets', label: 'Tickets', adminOnly: false },
    ]
    const currentPath = usePathname()
    return (
        <div className='flex items-center gap-4'>
            {links.filter(link => !link.adminOnly || role === "ADMIN").map((link) => (
                <Link href={link.href} key={link.label} className={`navbar-link${currentPath === link.href ? ' cursor-default text-primary hover:text-primary/70' : ''}`}>
                    {link.label}
                </Link>
            ))}
        </div>
    )
}

export default MainNavLinks