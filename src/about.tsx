import React, { useRef } from 'react';


const About: React.FC = () => {
    const about = useRef(null);
    return (
        <> 
         <div  ref={about} className="section">
            <h2 className='fresh'>About FreshFood</h2>
            <p>This is the about section</p>
         </div>
        </>
    )
}    
    
export default About