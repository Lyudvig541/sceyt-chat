import {useSelector} from 'react-redux';
import {chats} from '../utils/chats';
import {useState} from "react";

function Chat() {
    const userInfo = useSelector((state) => state);
    const [typing ,setTyping] = useState()
    const [message ,setMessage] = useState()
    console.log(chats, 55555555)
    console.log(userInfo, 1111111111)
    const sendMessage = () =>{

        setMessage(typing)
    }
    return (
        <div className={'grid grid-cols-3 h-full w-full text-xl font-medium'}>
            <div className='col-span-1 h-full border-r  border-r-[#E8E9EE] p-2'>
                <div className='flex flex-row w-full'>
                    <div className='flex items-center justify-center w-full'>Chats</div>
                    <div className='flex items-center justify-end'>
                        <img src={'./edit-button.svg'} alt="sceyt"
                             width='112px' height='44px'/>
                    </div>
                </div>
                <div className='flex row w-full p-2'>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-200" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                               className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-[18px] bg-gray-50 focus:ring-0 outline-0"
                               placeholder="Search" required/>
                    </div>
                </div>
                <div className='flex flex-col w-full p-2'>
                    <div className={'flex flex-row gap-2 items-center cursor-pointer'} onClick={() => {
                        console.log(1111111)
                    }}>
                        <div>
                            <img src="./Avatar.png" alt="avatar"/>
                        </div>
                        <div className='flex flex-col w-full py-1'>
                            <div className={'flex flex-row justify-between w-full'}>
                                <div className={'font-medium text-base text-[#111539] leading-5'}>James Calzoni</div>
                                <div className={'font-normal text-sm   text-[#707388] leading-5'}>Today</div>
                            </div>
                            <div className={'flex flex-row'}>
                                <div className={'font-normal text-[15px] text-[#111539] leading-5'}>You:
                                    <span className={'font-normal text-sm   text-[#707388] leading-5'}> Last updates for this project</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='col-span-2'>
                <div
                    className='flex flex-row items-center h-[64px] border-b  border-b-[#E8E9EE] py-[13px] px-4 w-full justify-between'>
                    <div className='flex flex-row items-center gap-2 '>
                        <div>
                            <img src="./Avatar.png" alt="avatar" width={'40px'} height={'40px'}/>

                        </div>
                        <div className='flex flex-col w-full py-1'>
                            <div className={'flex flex-row justify-between w-full'}>
                                <div className={'font-medium text-base text-[#111539] leading-5'}>Marketing Team</div>
                            </div>
                            <div className={'flex flex-row'}>
                                <div className={'font-normal text-[15px] text-[#707388] leading-5'}>395 members</div>
                            </div>
                        </div>
                    </div>
                    <div className={'cursor-pointer '}>
                        <img src="./info-circle.svg" alt="info"/>
                    </div>
                </div>
                <div className={'flex flex-col w-full h-[90vh] justify-between px-[100px]'}>
                    <div className=' p-2'>
                        {message ? message : 'No massages'}
                    </div>
                    <div className='flex flex-col justify-end p-2 mb-[20px]'>
                        <div className={'flex flex-row gap-2 items-center justify-center'}>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
                                    <img src="./Add.svg" alt="add"/>
                                </div>
                                <input type="text" id="text" onChange={(e)=>setTyping(e.target.value)}
                                       className="block w-full p-2 ps-10 text-sm text-[#111539] border border-gray-300 rounded-[18px] bg-[#E3E7FF] focus:ring-0 outline-0"
                                       placeholder="Write a message..." required/>
                                <div className="absolute inset-y-0 end-2 flex items-center ps-3 cursor-pointer">
                                    <img src="./smile.svg" alt="add"/>
                                </div>

                            </div>
                            <div className='flex' onClick={sendMessage}>
                                <img src="./Send.svg" alt="send"/>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default Chat;
