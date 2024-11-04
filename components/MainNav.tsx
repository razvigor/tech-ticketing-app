import Link from 'next/link'
import ToggleMode from './ToggleMode'
import Image from 'next/image'
import LogoLight from '@/assets/images/LogoLight.png'
import LogoDark from '@/assets/images/LogoDark.png'
import MainNavLinks from './MainNavLinks'

const MainNav = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
                <Link href="/" className='text-2xl font-bold'>
                    <Image src={LogoLight} width={156} alt='Ticket Application' className='dark:hidden' quality={75} priority />
                    <Image src={LogoDark} width={156} alt='Ticket Application' className='hidden dark:block' quality={75} priority />
                </Link>

            </div>
            <MainNavLinks />
            <div className='flex items-center gap-2'>
                <Link href="/">Logout</Link>
                <ToggleMode />
            </div>
        </div>
    )
}

export default MainNav