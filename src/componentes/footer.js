import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-500">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-[#FFFFFF] sm:text-center">© 2025 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                    <Link to={"/"} className="hover:underline text-[#FFFFFF] me-4 md:me-6">
                        Divierte-Finance
                    </Link>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;