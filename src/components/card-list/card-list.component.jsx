import { Component } from "react";
import './card-list.style.css';
import Card from "../card/card.component";

class Cardlist extends Component {

    render() {
        const {filteredMonsters} = this.props
        return (
            <div className="card-list">
                {filteredMonsters.map((monster) => {
                    return (
                        <Card key={monster.id} monster={monster} />
                    )
                })
                }
            </div>
        )
    }

}

export default Cardlist;

