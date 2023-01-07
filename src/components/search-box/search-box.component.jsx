import './search-box.style.css'

const Searchbox = (props) => {
    const {className, placeholder, onChangeHandler} = props; 
    return (
        <div>
            <input 
                type="search" 
                className={`search-box ${className}`} 
                placeholder = {placeholder}
                onChange={onChangeHandler}
            />   
        </div>
    )
}

export default Searchbox;