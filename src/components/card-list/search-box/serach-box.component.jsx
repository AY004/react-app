

import './search-box.styles.css';

const Searchbox = ({onChangeHandler, className, placeholder}) => (
    <input className={`search-box ${className}`}
            type='search' 
            placeholder={placeholder} 
            onChange={onChangeHandler}/>
    
);
    
    
            



export default Searchbox;