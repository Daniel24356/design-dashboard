import './herosection.css'
import  Button  from './props/buttonName';

function Herosection() {
    function handleClick(){
        alert("Thanks for clicking");
      }
    return (
        <> 
        <body>
        <div className='heroSection'>
         <div className='blurer'>
        <h2 className='hero-logo'>
           FreshGoods 
        </h2>
        <p className='hero-big'>Concisely</p>
        <p className='hero-big'>describe your</p>
        <p className='hero-big'>product or service</p>
        <div className='pContainer'>
        <p className='hero-small'>No need to get clever. Tell people exactly what you're offering, then</p>
        <p className='hero-small'>use this space to communicate your key value proposition.</p>
        </div>
        <Button label="ORDER NOW" color="readOnly" onclick={handleClick}/>
        </div>
        </div>

        </body>
        </>
    )
}    
    
export default Herosection