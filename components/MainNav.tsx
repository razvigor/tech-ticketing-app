import Link from 'next/link'
import ToggleMode from './ToggleMode'
import Image from 'next/image'
import LogoLight from '@/assets/images/LogoLight.png'
import LogoDark from '@/assets/images/LogoDark.png'
import MainNavLinks from './MainNavLinks'
import { getServerSession } from 'next-auth'
import options from '@/app/api/auth/[...nextauth]/options'

const MainNav = async () => {
    const session = await getServerSession(options)
    return (
        <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
                <Link href="/" className='text-2xl font-bold'>
                    <Image src={LogoLight} width={156} alt='Ticket Application' className='dark:hidden' quality={75} priority />
                    <Image src={LogoDark} width={156} alt='Ticket Application' className='hidden dark:block' quality={75} priority />
                </Link>
            </div>
            <MainNavLinks role={session?.user.role} />
            <div className='flex items-center gap-2'>
                {session ? (
                    <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
                ) : (
                    <Link href="/api/auth/signin">Login</Link>
                )}
                <ToggleMode />
            </div>
        </div>
    )
}

export default MainNav