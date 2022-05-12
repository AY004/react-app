

const Monsters = ({monsters}) => (

    <div className="card-container" > 

            
            <img  alt="monster" src={`https://robohash.org/${monsters.id}?set=set2&size=180x180`} />
            <h1>{monsters.name}</h1>
             <p>{monsters.email}</p>

    </div>
    
        
        
    
);
    

        
        


export default Monsters;