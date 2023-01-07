import './App.css';
import { Component } from 'react';
import Cardlist from './components/card-list/card-list.component';
import Searchbox from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField: ''
    }
  }

  componentDidMount () {
    this.getData();
  }

  getData () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          ()=>{return {monsters: users};}
          );
        this.setState(
          ()=>{return {filteredMonsters : this.state.monsters}}
        );
      })
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(
      () => {return {searchField}}
    );
  }

  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter(
      (monster) => monster.name.toLowerCase().includes(searchField))

    return (
      
      <div className="App">
        <h1 className='app-tittle'>Monster List</h1>
        <Searchbox 
          onChangeHandler={onSearchChange} 
          placeholder='search monster'
          className='monsters-search-box' />
        <Cardlist filteredMonsters={filteredMonsters} />

        
      </div>
    );
  }
}

export default App;
