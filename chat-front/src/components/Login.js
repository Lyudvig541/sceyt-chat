import {useState} from "react";
import {useDispatch} from "react-redux";
import {saveUserInfo} from "../actions/user";
import { useNavigate } from "react-router-dom";
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] =useState();
    const [firstname, setFirstname] =useState();
    const [lastname,setLastname] =useState();
    const handleLogin = ()=>{
        const userInfo = {
            username,firstname,lastname
        }
        console.log(username,11111)
        console.log(firstname,11111)
        console.log(lastname,11111)
        dispatch(saveUserInfo(userInfo));
        if (username && firstname && lastname){
            navigate("/chat");
        }
    }
    return (
        <div className={'flex justify-center items-center h-full'}>
            <div className={'flex flex-col w-full justify-center gap-4'}>
                <div className={'flex justify-center'}>
                    <img src={'./sceyt-logo.svg'} alt="sceyt"/>

                </div>
                <div className={'flex justify-center '}>

                    <div
                        className="p-6 bg-white border border-gray-200 rounded-lg flex flex-col gap-4">
                        <h3 className='text-[#111539] text-2xl	font-semibold leading-8 text-center'>
                            Log In to your account
                        </h3>
                        <div className='flex row gap-4'>
                            <div className="mb-5 col-6 ">
                                <label htmlFor="first_name"
                                       className="block mb-2 text-sm font-medium text-gray-900">
                                    First name<span>*</span></label>
                                <input type="text" id="first_name"
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Enter your first name" required
                                onChange={e=>setFirstname(e.target.value)}/>
                            </div>
                            <div className="mb-5 col-6 ">
                                <label htmlFor="last_name"
                                       className="block mb-2 text-sm font-medium text-gray-900">
                                    Last name<span>*</span></label>
                                <input type="text" id="last_name"
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Enter your last name" required
                                       onChange={e=>setLastname(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='flex row'>
                            <div className="mb-5 w-full">
                                <label htmlFor="username"
                                       className="block mb-2 text-sm font-medium text-gray-900">
                                    Username<span>*</span></label>
                                <input type="text" id="username"
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Enter your username" required
                                       onChange={e=>setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='flex row'>
                            <button type="button" onClick={handleLogin}
                                    className="rounded-xl bg-[#555DF6] text-white px-5 py-2.5 text-center me-2 mb-2">
                                Log In
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
