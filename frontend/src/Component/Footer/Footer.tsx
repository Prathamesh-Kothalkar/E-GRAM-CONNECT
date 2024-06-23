import { Facebook, GitHub, LogoDev, Twitter } from "@mui/icons-material";
import "./footer.css"
export default function Footer(){
    return<>
        <div className="md:p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 space-x-0">
            <div className="p-5">
                <div className="text-black text-3xl font-semibold">
                        GRAM-JANSEVA
                </div>
                <div className="py-2">
                    A Digital Village Council (Gram-Panchayat)
                </div>
                <div className="py-4">
                    <Facebook className="m-2"/>
                    <Twitter className="m-2"/>
                    <GitHub className="m-2"/>
                </div>
            </div>
            <div className="grid grid-cols-2 space-x-0 md:grid-cols-4 xl:grids-cols-4">
                <div className="">
                    <ul>
                        <li className=" font-semibold text-xl mb-3">Organization</li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Project's</li>
                        <li>Members</li>
                    </ul>
                </div>
                <div className="">
                    <ul>
                        <li className=" font-semibold text-xl mb-3">Help & Support</li>
                        <li>Contribute</li>
                        <li>Contact Us</li>
                        <li>Developer</li>
                    </ul>
                </div>
                <div className="">
                    <ul>
                        <li className=" font-semibold text-xl mb-3">Resources</li>
                        <li>Blog</li>
                        <li>Github</li>
                        <li>Google</li>
                    </ul>
                </div>
                <div className="">
                    <ul>
                        <li className=" font-semibold text-xl mb-3">Technology</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 ">
                <div className="font-bold text-xl uppercase">
                    Prathamesh <LogoDev/>
                </div>
                <div className="text-slate-600">
                    Copyright © 2024 by Walsawangi Gram-Panchayat. Made with ❤️ by Prathamesh-Kothalkar  
                </div>
        </div>
    </>
}