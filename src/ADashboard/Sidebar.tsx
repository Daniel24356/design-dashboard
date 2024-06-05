 import './sidebar.css'
import {IoMdHome} from 'react-icons/io'
import {HiOutlineUserAdd} from 'react-icons/hi'
import {AiOutlineMessage} from 'react-icons/ai'
import {MdFormatAlignLeft} from 'react-icons/md'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {MdOutlinePhoneInTalk} from 'react-icons/md'
import {LiaBookSolid} from 'react-icons/lia'
import {MdOutlineLibraryBooks} from 'react-icons/md'
import {CiCalendar} from 'react-icons/ci'
import {GoClock} from 'react-icons/go'
import {GrDocumentText} from 'react-icons/gr'
import {TiBell} from 'react-icons/ti'
import {FaGears} from 'react-icons/fa6'
import { LuCalendarDays } from 'react-icons/lu'
import { GoBriefcase } from 'react-icons/go'

 function Sidebar(){
    return(
        <>
        <aside className="sidebar"> 
            <div className='logo-si'>
                <img src="/side-logo.PNG" alt="" />
                </div>
            <ul className="list-cont">
                <li className='active'>
                    <IoMdHome className='icons'/>
                    DashBoard
                    </li>
                <li>
                    <HiOutlineUserAdd className='icons'/>
                    User
                    </li>
                <li>
                    <AiOutlineMessage className='icons'/>
                    Messenger
                    </li>
                <li>
                    <MdFormatAlignLeft className='icons'/>
                    Form Builder
                    </li>
                <li>
                    <AiOutlineDollarCircle className='icons'/>
                    Accounts
                    </li>
                <li>
                    <MdOutlinePhoneInTalk className='icons'/>
                    Contacts
                    </li>
                <li>
                    <LiaBookSolid className='icons'/>
                    Leads
                    </li>
                <li>
                    <MdOutlineLibraryBooks className='icons'/>
                    Quotes
                    </li>
                <li>
                    <CiCalendar className='icons'/>
                    Sales Orders
                    </li>
                <li>
                    <GoBriefcase className='icons'/>
                    Cases
                    </li>
                <li>
                    <LuCalendarDays className='icons'/>
                    Calender
                    </li>
                <li>
                <GoClock className='icons'/>
                    Meeting
                    </li>
                <li>
                <GrDocumentText className='icons'/>
                    Document
                    </li>
                <li>
                <TiBell className='icons'/>
                    Plan
                    </li>
                <li>
                <FaGears className='icons'/>
                    Constant
                    </li>
            </ul>
        </aside>
        
        </>
    )
  }

  export default Sidebar