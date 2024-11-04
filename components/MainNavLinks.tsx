'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MainNavLinks = () => {
    const links = [
        { href: '/', label: 'Dashboard' },
        { href: '/users', label: 'Users' },
        { href: '/tickets', label: 'Tickets' },
    ]
    const currentPath = usePathname()
    return (
        <div className='flex items-center gap-2'>
            {links.map((link) => (
                <Link href={link.href} key={link.label} className={`navbar-link${currentPath === link.href ? ' cursor-default text-primary hover:text-primary/70' : ''}`}>
                    {link.label}
                </Link>
            ))}
        </div>
    )
}

export default MainNavLinks