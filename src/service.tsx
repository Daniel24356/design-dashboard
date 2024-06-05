
import React, { useRef } from 'react';
import './about.css'

const Services: React.FC = () => {
    const services = useRef(null);
    return (
        <> 
     <div ref={services} className="section">
        <h2 className='fresh' >Services Section</h2>
        <p>This is the services section</p>
     </div>
        </>
    )
}    
    
export default Services