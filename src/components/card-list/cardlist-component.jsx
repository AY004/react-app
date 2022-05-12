

import './card-list.styles.css'

import Monsters from "./monster-list.component";


const  Cardlist = ({monsters}) => (

    
    <div className="card-list">
    
        
        {monsters.map((mon) => {
            

            return <Monsters monsters={mon} />
            

                

               
         })}
 </div>
       

         
    
);

export default Cardlist