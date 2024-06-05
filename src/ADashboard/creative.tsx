   import './creative.css'
   import { BiLike } from "react-icons/bi";
   import { LuCalendarDays } from 'react-icons/lu'
   import { PiDotsThreeVerticalBold } from "react-icons/pi";
   function Creative(){
        return(
            <>
            <div>
                <div className='create-all'>
             <div className='cont-all'>
                <div className='green-cont'>
                    <div>
                        <img src="/greenP.PNG" alt="" />
                    </div>
                    <div>
                        <p className='creative-text'>Creative Pigeon</p>
                        <p className='http-c'>https//creativepigeon.com</p>
                    </div>
                </div>
                <div className='gray-cont'>
                    <div className='gray-t'>
                         <BiLike className='like-icons'/>
                        <p className='gray-n'>10</p>
                    </div>
                    <div className='cal-cont'>
                    <LuCalendarDays className='cal-icons'/>
                        <p className='date-t'>9 February, 2021</p>
                    </div>
                    <div className='outer-cont'>
                        <div className='inner-cir'></div>
                    </div>
                    <div>
                        <PiDotsThreeVerticalBold/>
                    </div>
                </div>
             </div>

             <div className='cont-all'>
                <div className='green-cont'>
                    <div>
                        <img src="/orangeP.PNG" alt="" />
                    </div>
                    <div>
                        <p className='creative-text'>Creative Pigeon</p>
                        <p className='http-c'>https//creativepigeon.com</p>
                    </div>
                </div>
                <div className='gray-cont'>
                    <div className='gray-t'>
                        <BiLike className='like-icons'/>
                        <p className='gray-n'>10</p>
                    </div>
                    <div className='cal-cont'>
                        <LuCalendarDays className='cal-icons'/>
                        <p className='date-t'>9 February, 2021</p>
                    </div>
                    <div className='outer-conts'>
                        <div className='inner-cir'></div>
                    </div>
                    <div>
                        <PiDotsThreeVerticalBold/>
                    </div>
                </div>
             </div>
                </div>
               
            </div>
            </>
        )
    }

    export default Creative