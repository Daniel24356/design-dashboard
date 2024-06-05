// import React, { useRef } from 'react';
// import './headerName.css'
// import  Button  from './props/buttonName';
// import './about.css'
// import './herosection.css'
 
//   const Header: React.FC = () => {

//     function handleClick(){
//     alert("Thanks for clicking");
//   }

//     // const sectionRefs = {
//     //  about: useRef<HTMLDivElement>(null),
//     //   services: useRef<HTMLDivElement>(null),
//     //   contact: useRef<HTMLDivElement>(null),
//     // };
        
   
//     //    const scrollToSection = (section: string) => {
//     //     const sectionRef = sectionRefs[section];
//     //        if(sectionRef.current){
//     //            window.scrollTo({
//     //             top: sectionRef.current.offsetTop,
//     //             behavior: 'smooth'
//     //            });
//     //        }
//     //    }
    
//     const services = useRef(null);
//     const about = useRef(null);
//     const contact = useRef(null)

//     const scrollToSection = (elementRef) => {
//        window.scrollTo({
//         top: elementRef.current.offsetTop,
//         behavior:"smooth"
//        })
//     }

//   return (
//     <>

//      <nav className='header'>
//             <div>
//                 <li className='title'>FreshGoods</li>
//             </div>
                 
//             <div className='second-comp'>
//             <div className='subcomp'>
//                 <li onClick={() => scrollToSection(about)} className='liststyle'>About</li>
//                 <li onClick={() => scrollToSection(services)} className='liststyle' >Services</li>
//                 <li onClick={() => scrollToSection(contact)} className='liststyle' >Contact Us</li>
//                 <li  className='liststyle'>Cart</li>  
//             </div>
             
//             {/* <div className='subcomp'>
//               <a href="#about">
//               <li  className='liststyle'>About</li>
//               </a>
//               <a href="#services">
//               <li  className='liststyle' >Services</li>
//               </a>
//                 <a href="#contact">
//                 <li  className='liststyle' >Contact Us</li>
//                 </a>
//               <li  className='liststyle'>Cart</li>  
               
//             </div> */}

//             <div className='btn-cont'>
//             <Button label="BUY NOW" color='secondary' onclick={handleClick}/>
//             <Button label="SELL NOW" color='primary' onclick={handleClick}/>
//             </div>
//             </div>

//             </nav>

//             <body>
//         <div className='heroSection'>
//          <div className='blurer'>
//         <h2 className='hero-logo'>
//            FreshGoods 
//         </h2>
//         <p className='hero-big'>Concisely</p>
//         <p className='hero-big'>describe your</p>
//         <p className='hero-big'>product or service</p>
//         <div className='pContainer'>
//         <p className='hero-small'>No need to get clever. Tell people exactly what you're offering, then</p>
//         <p className='hero-small'>use this space to communicate your key value proposition.</p>
//         </div>
//         <Button label="ORDER NOW" color="readOnly" onclick={handleClick}/>
//         </div>
//         </div>

//         </body>

//             <div  ref={about} className="section">
//             <h2 className='fresh'>About FreshFood</h2>
//             <p className='abtSect'>This is the about section</p>
//           </div> 

//           <div ref={contact} className="section">
//           <h2 className='fresh'>Contact Section</h2>
//           <p className='abtSect'>This is the contact section</p>
//         </div>

//         <div ref={services} className="section">
//         <h2 className='fresh' >Services Section</h2>
//         <p className='abtSect'>This is the services section</p>
//      </div>
//     </>
//   )
//   }

// export default Header
