import { useState ,useEffect} from 'react';

import Searchbox from './components/card-list/search-box/serach-box.component';

import Cardlist from './components/card-list/cardlist-component';
import './App.css';

const App = () =>{

  const [searchField,setSearchField] = useState('')

  const [monsters,setMonsters] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) =>{
      setMonsters(users)
    })
  },[])

  const onSearchange = (e) => {
    const SearchFieldString = e.target.value.toLocaleLowerCase();

    setSearchField(SearchFieldString);
    
    
  };

  const filtermonsters = monsters.filter((mon) => {

      return mon.name.toLocaleLowerCase().includes(searchField);
      

  })

  
  return (
        
    <div className="App">
       <h1 className='app-title'>Monsters Rolodex</h1>

      <Searchbox  onChangeHandler={onSearchange} placeholder='search monsters' className='search-box'/>
      <Cardlist  monsters = {filtermonsters}/>
      
      
    </div>
  );

}



export default App;
