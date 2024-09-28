import Link from "next/link";
import Image from "next/image";
import { DockDemo } from "./Duck_UI/duck";
export default function Footer() {
    return (
        <section className=" bg-gradient-to-r from-fuchsia-400/20 to-blue-600/50">
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-5 flex items-center sm:flex-row flex-col justify-between">
                    <div className="flex items-center">
                        <Link href="https://www.linkedin.com/company/theconstructors/?viewAsMember=true" target="black" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <Image
                                alt="Company Image"
                                src={require('../../../public/company-logo.jpg')}
                                width={1000}
                                height={1000}
                                className="w-10 h-10 rounded-full">
                            </Image>
                            <span className="ml-3 text-xl hover:text-blue-600 focus:text-blue-600">Company</span>
                        </Link>
                        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 p-3 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-[5px]">
                            © 2024 TCDG —
                            <Link
                                href="https://www.linkedin.com/company/theconstructors/?viewAsMember=truez"
                                className="text-gray-600 ml-1"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                @furqanahmed-n
                            </Link>

                        </p>
                    </div>
                    {/* Duck icons */}
                    <div>
                        <DockDemo />
                    </div>
                </div>
            </footer>

        </section>
    );
}