import XMenu from "./Menu";

export default function Navbar() {
    return <>
        <div className="w-full z-40 h-14 backdrop-blur-xl scroll-smooth bg-opacity-75 flex justify-between top-0 right-0 fixed">
            <div className="text-black font-bold text-3xl p-2">
                E-Gram
            </div>
            <div className="text-xl font-semibold">
                <ul className="flex m-0">
                    <li className="hidden md:block xl:block mt-2 px-2 cursor-pointer">Home</li>
                    <li className="hidden md:block xl:block mt-2 px-2 cursor-pointer">Projects</li>
                    <li className="hidden md:block  xl:block mt-2 px-2 cursor-pointer">About</li>
                    <li><XMenu /></li>
                </ul>
            </div>
        </div>
    </>
}