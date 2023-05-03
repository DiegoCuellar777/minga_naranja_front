import React from "react"
import { Link as Anchor } from "react-router-dom"
import { useRef } from "react";
import axios from "axios";
import apiUrl from "../../api";

export default function Register() {

    const name = useRef()
    const email = useRef()
    const photo = useRef()
    const password = useRef()
    const notifications = useRef()

    const handleForm = (e) => {

        e.preventDefault()

        let inputName = name.current.value
        let inputEmail = email.current.value
        let inputPhoto = photo.current.value
        let inputPassword = password.current.value
        let inputNotifications = notifications.current.value
        
        let dataUser = {
            name: inputName,
            email: inputEmail,
            photo: inputPhoto,
            password: inputPassword,
            notifications: inputNotifications,
        };

        axios.post(apiUrl+"auth/signup", dataUser)
        .then(res=>{
            console.log(res)
            alert(res.data.message)
        })
        .catch(err=>{
            console.log(err.response.data.message)
            alert(err.response.data.message)
        }) 
    } 


    return (
        <div className="flex">
            <img src="/public/images/pexels-aleksandar-pasaric-2339009 1.png" className="w-[70%] h-screen object-cover" alt="" />
            <div className="bg-white w-[30%] flex flex-col justify-center items-center">
                <img src="/public/images/Logo 2 1.png" className="h-[3rem]" alt="" />
                <div className="flex flex-col items-center  mt-6">
                    <h2 className="font-bold text-center text-3xl/[39px]">Welcome!</h2>
                    <span className="text-center text-xs px-10 py-4">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</span>
                    <form className="flex flex-col w-[75%]">
                        <label htmlFor="name" className="flex flex-col px-4 text-[#1F1F1F7c] mt-4 text-xs">Name</label>
                        <input type="text" name="name" id="name" className="border-b border-[#1f1f1f7c] px-4 text-xs py-2" ref={name}/>
                        <label htmlFor="email" className="flex flex-col px-4 text-[#1F1F1F7c] mt-4 text-xs">Email</label>
                        <input type="email" name="email" id="email" className="border-b border-[#1f1f1f7c] px-4 text-xs py-2" ref={email}/>
                        <label htmlFor="photo" className="flex flex-col px-4 text-[#1F1F1F7c] mt-4 text-xs">Photo</label>
                        <input type="url" name="photo" id="photo" className="border-b border-[#1f1f1f7c] px-4 text-xs py-2" ref={photo}/>
                        <label htmlFor="password" className="flex flex-col px-4 text-[#1F1F1F7c] mt-4 text-xs">Password</label>
                        <input type="password" name="password" id="password" className="border-b border-[#1f1f1f7c] px-4 text-xs py-2" ref={password}/>
                        <label htmlFor="notification" className="text-xs"><input type="checkbox" name="notification" id="notification" className="mt-4 text-xs" ref={notifications} /> Send notification to my email</label>
                        <input type="submit" value="Sign Up" className="bg-gradient-to-r from-[#434343]  to-black  text-white rounded-lg py-3 text-sm my-3" onClick={handleForm}/>
                    </form>
                    <button className="flex border w-[75%] py-3 rounded-lg border-[#1f1f1f78] justify-center ">
                        <img src="/public/images/Google.png" alt="" /><span>Sign up with Google</span>
                    </button>
                    <span className="w-[75%] text-xs mt-4">Already have an account? <Anchor to="/LogIn" className="text-red-600 font-bold">Log in</Anchor></span>
                </div>
            </div>
        </div>
    )
}
