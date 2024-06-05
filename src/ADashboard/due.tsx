import './due.css'
import { RiDeleteBin6Line } from "react-icons/ri";

function Due() {
    return (
        <>
            <div className='due-all'>
                <div className='due-project' >
                    <p className="due-text">Top Due Projects</p>
                    <div className='due-cont'>
                        <div><img className='image-prof' src='/profile.jpg' alt="Profile" /></div>
                        <div className='name-sec'>
                            <div className='name-div'>
                                <p className='name-text'>Omar Faruk</p>
                                <button className='name-btn'>owner</button>
                            </div>
                            <div className='flow-cont'>
                                <div className='sec-rate'></div>
                                <div className='flow-rate'></div>
                            </div>
                        </div>
                    </div>

                    <div className='due-cont'>
                        <div><img className='image-prof' src="/Phanda.jpg" alt="" /></div>
                        <div className='name-sec'>
                            <div className='name-div'>
                                <p className='name-text'>Mahafuzur Rhaman</p>
                                <button className='name-btns'>owner</button>
                            </div>
                            <div className='flow-cont' >
                                <div className='sec-rates'></div>
                                <div className='flow-rates' ></div>
                            </div>

                        </div>
                    </div>
                    <div>

                    </div>

                    <div className='due-cont'>
                        <div><img className='image-prof' src="/profile1.jpg" alt="" /></div>
                        <div className='name-sec'>
                            <div className='name-div'>
                                <p className='name-text'>Mahela Khan</p>
                                <button className='name-btnss'>owner</button>
                            </div>
                            <div className='flow-cont'>
                                <div className='sec-ratess'></div>
                                <div className='flow-ratess' ></div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='do-cont'>
                    <div className='view-cont'>
                        <p className='do-name'>To do list</p>
                        <button className='view-btn'>Card view</button>
                    </div>
                    <div className='check-cont'>
                        <div className='dash-cont'>
                            <div className='syn-cont'>
                                <input type="checkbox" />
                                <p className='syn-text'>Synergy Admin Dashboard plan is ready</p>
                            </div>
                            <div>
                                <RiDeleteBin6Line className='delete-icons' />
                            </div>
                        </div>

                        <div className='dash-cont'>
                            <div className='syn-cont'>
                                <input type="checkbox" />
                                <p className='syn-text'>Create Flow Charts ready</p>
                            </div>
                            <div>
                                <RiDeleteBin6Line className='delete-icons' />
                            </div>
                        </div>

                        <div className='dash-cont'>
                            <div className='syn-cont'>
                                <input type="checkbox" />
                                <p className='syn-text'>Wareframe ready</p>
                            </div>
                            <div>
                                <RiDeleteBin6Line className='delete-icons' />
                            </div>
                        </div>

                        <div className='dash-cont'>
                            <div className='syn-cont' >
                                <input type="checkbox" />
                                <p className='syn-text'> Admin Dashboard UI design</p>
                            </div>
                            <div>
                                <RiDeleteBin6Line className='delete-icons' />
                            </div>
                        </div>

                        <div className='dash-cont'>
                            <div className='syn-cont' >
                                <input type="checkbox" />
                                <p className='syn-text'>Landing page development</p>
                            </div>
                            <div>
                                <RiDeleteBin6Line className='delete-icons' />
                            </div>
                        </div>

                        <div className='dash-cont'>
                            <div className='syn-cont' >
                                <input type="checkbox" />
                                <p className='syn-text'>Project Review</p>
                            </div>
                            <div>
                                <RiDeleteBin6Line className='delete-icons' />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Due