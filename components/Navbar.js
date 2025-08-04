'use client';
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "@/theme-btn";

const Navbar = () => {

    return (
        <nav className="bg-background/50 fixed border-b backdrop-blur-sm shadow-md w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href={'/'} className="text-2xl font-bold text-blue-600">MyBlog</Link>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center space-x-6">
                        <Link href="/" className=" hover:text-blue-600 font-medium">
                            Home
                        </Link>
                        <Link href="/about" className=" hover:text-blue-600 font-medium">
                            About
                        </Link>
                        <Link href="/blog" className=" hover:text-blue-600 font-medium">
                            Blog
                        </Link>
                        <Link href="/contact" className=" hover:text-blue-600 font-medium">
                            Contact
                        </Link>
                        <Button variant="outline">Login</Button>
                        <Button variant="outline">Sign up</Button>
                        <ModeToggle />
                    </div>
                    {/* Theme Toggle */}

                    {/* Mobile Hamburger */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text- hover:text-blue-600 focus:outline-none"
                            aria-controls="mobile-menu"

                        >
                            <Sheet>
                                <SheetTrigger>
                                    <Menu className="h-6 w-6" />
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle className={'text-center flex items-center justify-center gap-3 text-blue-600 font-bold text-xl'}>MyBlog
                                            <ModeToggle />
                                        </SheetTitle>
                                        <SheetDescription>
                                            <div className="px-2 text-center pt-2 pb-3 space-y-1 sm:px-3 shadow">
                                                <Link href="/" className="block hover:text-blue-600 font-medium py-2 px-3 rounded">
                                                    Home
                                                </Link>
                                                <Link href="/about" className="block hover:text-blue-600 font-medium py-2 px-3 rounded">
                                                    About
                                                </Link>
                                                <Link href="/blog" className="block hover:text-blue-600 font-medium py-2 px-3 rounded">
                                                    Blog
                                                </Link>
                                                <Link href="/contact" className="block hover:text-blue-600 font-medium py-2 px-3 rounded">
                                                    Contact
                                                </Link>
                                                <div className="flex items-center justify-center gap-4 mt-4">
                                                    <Button variant="outline">Login</Button>
                                                    <Button variant="outline">Sign up</Button>
                                                </div>
                                            </div>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;