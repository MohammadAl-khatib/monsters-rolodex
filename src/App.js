import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor () {
    super();

    this.state = {
      monsters : [],
      filteredMonsters: [],
    }
  }


  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      response.json().then (res => {
        this.setState({ 
          monsters: res,
          filteredMonsters: this.state.monsters
        });
      })
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={(event) => {
          this.setState({
            filteredMonsters: this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
            })
          })
        }} />
        {this.state.filteredMonsters.map((monster) =>{
          return <h1>{monster.name}</h1>
        })}
      </div>
    );
  }
}

export default App;
