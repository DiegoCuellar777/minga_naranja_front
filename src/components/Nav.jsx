import React, { useState } from "react";
import { Link as Anchor, useNavigate} from "react-router-dom"
import Logo from "../assets/images/Logo.png";
import apiUrl from "../../api";
import axios from "axios";


export default function Nav() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    
    const navigate = useNavigate()
    
    const handleMenuClick = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    const handleCloseOffcanvas = () => {
        setIsOffcanvasOpen(false);
    };

    let token = localStorage.getItem("token")
    let user = JSON.parse(localStorage.getItem("user"))
    let headers = {headers:{'Authorization':`Bearer ${token}`}}


    function backHome() {
        axios.post(apiUrl+"auth/signout", null, headers)
            .then(res=>{
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                navigate("/")
            })
            .catch(err=>alert(err))
    }
    
    let role = JSON.parse(localStorage.getItem("user"))?.role
    let photo = JSON.parse(localStorage.getItem("user"))?.photo
    let email = JSON.parse(localStorage.getItem("user"))?.email

    return (
        <nav className="h-[10vh] flex justify-between p-4 w-full fixed z-10 s border-gradient-to-r from-transparent to-transparent via-white">
            <button className="contents" onClick={handleMenuClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={isOffcanvasOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
                    />
                </svg>
            </button>
            <img className="h-[5vh]" src={Logo} alt="logo" to={'/'} />
            {isOffcanvasOpen && (
                <div className="flex flex-col items-center w-full md:w-[20rem] h-[100%] fixed bg-gradient-to-r hover:bg-[#89977928] from-neutral-500 to-[#000000e3] order-2 top-0 left-0 text-black z-50">
                    <div className="flex justify-between w-[100%] items-center">
                        {token && <div className="flex items-center p-2">
                            <img className="bg-black w-[40px] h-[40px] rounded-[100%] mr-2" src={photo} alt="" />
                            <div className="ml-1 text-white">
                                <h5>{email}</h5>
                            </div>
                        </div>}
                        <button className="text-white rounded p-2 w-[100%] flex justify-end " onClick={handleCloseOffcanvas}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-[100%] h-[100%] text-white flex-col mt-3 cel:order-3 sm:order-2 flex items-center justify-between">

                        <ul className="w-[80%] flex flex-col items-center gap-2 text-center">  
                            {!token && <Anchor to={'/LogIn'} className=" p-2 hover:bg-white text-white hover:text-black rounded-[8px] w-[95%]" onClick={handleCloseOffcanvas}>Log In</Anchor>}
                            {!token && <Anchor to={'/register'} className=" p-2 hover:bg-white text-white hover:text-black rounded-[8px] w-[95%]">Register</Anchor>}
                            {token && <Anchor to={'/'} className=" p-2 hover:bg-white text-white hover:text-black rounded-[8px] w-[95%]">Home</Anchor>}
                            {token && <Anchor to={'/manga-form'} className=" p-2 hover:bg-white text-white hover:text-black rounded-[8px] w-[95%]">Mangas</Anchor>}
                            {token && <Anchor className=" p-2 hover:bg-white text-white hover:text-black rounded-[8px] w-[95%]">My Mangas</Anchor>}
                            {(role===1 || role === 2) && <Anchor className=" p-2 hover:bg-white text-white hover:text-black rounded-[8px] w-[95%]">New Manga</Anchor>}
                            {token && <Anchor className=" p-2 hover:bg-white text-white hover:text-black rounded-[8px] w-[95%]">Favourites</Anchor>}
                            {token && <Anchor className=" p-2 hover:bg-white text-white hover:text-black rounded-[8px] w-[95%]" onClick={backHome}>Logout</Anchor>}
                            <token && <Anchor to={'/chapter-form'} className=" p-2 hover:bg-white text-white hover:text-black rounded-[8px] w-[95%]">New Chapter</Anchor>

                        </ul>
                        <ul className="w-[80%] flex justify-center items-center gap-2 text-center">
                            {token && role === 0 &&
                                <Anchor to="/author-form" className="p-2 mb-4 bg-white text-black rounded-md w-[70%]">
                                    New Author
                                </Anchor>
                            }
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}
