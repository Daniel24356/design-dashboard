  import './boxes.css'

function  Boxes(){
    return(
        <>
        <div className='user-all'>
          <div className="user-box first">
            <p className='status-text'>Revenue Status</p>
            <div className='inner-cont'>
            <img src="/first.PNG" alt="" />
            <div>
            <h3 className='price-text'>$ 122</h3>
            <p className='date-text'>jan-01 - jan-10</p>
            </div> 
            </div>
          </div>
          <div className="user-box second">
            <p className='status-texts'>Page View</p>
            <div className='two-div'>
            <h3 className='price-text'>$122</h3>
            <img className='img-sec' src="/second.PNG" alt="" />
            </div>
           
          </div>
          <div className="user-box third">
            <p className='status-text'>Bounce Rate</p>
            <div className='inner'>
                <div>
                    <h3 className='price-text'>$122</h3>
                    <button className='month-btn'>Monthly</button>
                </div>
                <div>
                    <img className='thir-img' src="/third.PNG" alt="" />
                </div>
            </div>
          </div>
          <div className="user-box fourth">
            <p className='status-text'>Revenue Status</p>
            <div className='inner-cont'>
            <img src="/fourth.PNG" alt="" />
            <div>
            <h3 className='price-text'>$ 122</h3>
            <p className='date-text'>jan-01 - jan-10</p>
            </div> 
            </div>
          </div>
        </div>
       
        </>
    )
   }

   export default Boxes

