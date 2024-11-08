import Link from "next/link";
import LogoLight from '@/assets/images/LogoLight.png'
import LogoDark from '@/assets/images/LogoDark.png'
import Image from 'next/image'
import { Mail, PhoneCall, Pin } from "lucide-react";
import FooterNav from "./FooterNav";



export default function Footer() {

    return (
        <footer className="flex flex-col items-center mt-8 border-t">
            <div className="max-w-6xl w-full py-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

                {/* Company Info */}
                <div>
                    <h3 className="text-lg font-semibold">
                        <Link href="/" className='text-2xl font-bold'>
                            <Image src={LogoLight} width={156} alt='Ticket Application' className='dark:hidden' quality={75} priority />
                            <Image src={LogoDark} width={156} alt='Ticket Application' className='hidden dark:block' quality={75} priority />
                        </Link>
                    </h3>
                    <p className="mt-2 text-sm">
                        WebWave Inovations provides innovative solutions for the modern business world. Our commitment is to quality and excellence.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        <FooterNav />
                    </ul>
                </div>

                {/* Newsletter Signup */}
                <div>
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <ul className="mt-2 space-y-3 text-sm">
                        <li><span className="flex gap-x-2 items-center"><Pin className="text-primary" size={18} /> 123 Business Rd, Business City, BC 12345</span></li>
                        <li><span className="flex gap-x-2 items-center"><PhoneCall className="text-primary" size={18} /> (123) 456-7890</span></li>
                        <li><span className="flex gap-x-2 items-center"><Mail className="text-primary" size={18} /> contact@webwave.com</span></li>
                    </ul>

                </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-8 w-full border-t py-4 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} WebWave. All rights reserved.</p>
            </div>
        </footer>
    );
}