import { Component } from "react";
import './search-box.style.css'

class Searchbox extends Component {
    render () {
        return (
            <div>
                <input 
                    type="search" 
                    className={`search-box ${this.props.className}`} 
                    placeholder = {this.props.placeholder}
                    onChange={this.props.onChangeHandler}
                />   
            </div>
        )
    }

}

export default Searchbox;