
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { MdOutlineMenuOpen } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
export default function Navbar() {
    return (
        <div className="sticky top-0">
            <header className="bg-slate-100 lg:py-1 ">
                <div className="mx-auto max-w-7xl lg:px-1">
                    {/* lg+ */}
                    <nav className="relative flex items-center justify-between bg-white rounded-md shadow-lg h-24 mx-1 my-1 px-8 py-6 lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
                        <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
                            <Link
                                href="#"
                                title=""
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            >
                                {" "}
                                Home{" "}
                            </Link>
                            <Link
                                href="#"
                                title=""
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            >
                                {" "}
                                About{" "}
                            </Link>
                            <Link
                                href="#"
                                title=""
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            >
                                {" "}
                                Service{" "}
                            </Link>
                            <Link
                                href="#"
                                title=""
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            >
                                {" "}
                                Projects{" "}
                            </Link>
                            <Link
                                href="#"
                                title=""
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            >
                                {" "}
                                Contact{" "}
                            </Link>
                        </div>
                        <div className="hidden lg:flex lg:items-center lg:space-x-10">
                            {/* CV */}
                            <Link href="./FURQAN RESUME.pdf" target="blank">
                                <button className=" flex items-center justify-center text-base font-bold px-3 py-3 text-black transition-all  hover:text-blue-600 focus:text-blue-600">
                                    Download CV <FaCloudDownloadAlt className="w-8 h-8 ml-[4px]" />
                                </button>
                            </Link>
                        </div>
                        {/* sheet option sm */}
                        <Sheet>
                            <div className="flex justify-between items-center text-black lg:hidden">
                                <Link href="./FURQAN RESUME.pdf" target="blank" >
                                    <button className=" flex items-center justify-center p-2 text-base font-bold text-black transition-all  hover:text-blue-600 focus:text-blue-600">
                                        <FaCloudDownloadAlt className="w-8 h-8 mr-[4px]" /> Download CV
                                    </button>
                                </Link>
                            </div>
                            <SheetTrigger className="flex p-2 lg:hidden" >
                                <MdOutlineMenuOpen className="w-8 h-8 text-base font-medium text-black transition-all  hover:text-blue-600 focus:text-blue-600" />
                            </SheetTrigger>
                            <SheetContent>
                                <nav className="grid my-4 pl-2">
                                    <Link
                                        href="/"
                                        title=""
                                        className="py-2 px-2 text-base font-medium text-white transition-all duration-200 focus:text-blue-600"
                                    >
                                        {" "}
                                        Home{" "}
                                    </Link>
                                    <Link
                                        href="/componets/about"
                                        title=""
                                        className="py-2 px-2 text-base font-medium text-white transition-all duration-200 focus:text-blue-600"
                                    >
                                        {" "}
                                        About{" "}
                                    </Link>
                                    <Link
                                        href="/componets/sarvices"
                                        title=""
                                        className="py-2 px-2 text-base font-medium text-white transition-all duration-200 focus:text-blue-600"
                                    >
                                        {" "}
                                        Service{" "}
                                    </Link>
                                    <Link
                                        href="/componets/Projacts"
                                        title=""
                                        className="py-2 px-2 text-base font-medium text-white transition-all duration-200 focus:text-blue-600"
                                    >
                                        {" "}
                                        Projects{" "}
                                    </Link>
                                    <Link
                                        href="/componets/contect"
                                        title=""
                                        className="py-2 px-2 text-base font-medium text-white transition-all duration-200 focus:text-blue-600"
                                    >
                                        {" "}
                                        Contact{" "}
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </nav>
                </div>
            </header>
        </div>
    );
}