import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () =>{
    return(
        <div className="px-10 h-[80px] flex justify-between border-b">
            <div className="flex gap-7 self-center">
                <Image
                    height={45}
                    width={97}
                    src="/images/logo.png"
                    alt='Iravit logo'
                />
            </div>
            <div className="flex gap-7 self-center">
                <ul className="flex gap-5">
                    <li><Link href="/blogs">Blogs</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                </ul>
                <ul className="flex gap-5">
                    <li><Link href="/blogs">Sign in</Link></li>
                    <li><Link href="/blogs">Get Started Free</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;