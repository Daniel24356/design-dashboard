
import React, { useRef } from 'react';
import './about.css'

 const Contact: React.FC = () => {
  const contact = useRef(null);
    return (
        <> 
        <div ref={contact} className="section">
          <h2 className='fresh'>Contact Section</h2>
          <p>This is the contact section</p>
        </div>
        </>
    )
}    
    
export default Contact