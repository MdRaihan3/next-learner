"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname()
    const router = useRouter()
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Blogs',
            path: '/blogs'
        },
        {
            title: 'Dashboard',
            path: '/dashboard'
        },
        {
            title: 'Categories',
            path: '/categories'
        },
        {
            title: 'posts',
            path: '/posts'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        {
            title: 'Gallery',
            path: '/gallery'
        },
    ]

    const handle = () => {
        router.push('/login')
    }

    if(pathname.includes('dashboard')){
        return ;
    }

    return (
        <div>
            <nav className=" flex justify-between mx-8 my-2 p-2">
                <div>Next Learner</div>
                <div>
                    <ul className=" flex gap-5 text-violet-900">
                        {
                            links.map((link, idx) => <li key={idx}><Link
                                className={pathname === link?.path ? 'text-blue-600' : undefined}
                                href={link.path}>{link?.title}</Link></li>)
                        }
                    </ul>
                    {/* <ul>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                        <li><Link href={'/services'}>Services</Link></li>
                    </ul> */}
                </div>
                <button onClick={handle} className=" bg-purple-500 px-4">Login</button>
            </nav>
        </div>
    );
};

export default Navbar;