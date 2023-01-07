import './card-list.style.css';
import Card from "../card/card.component";

const Cardlist = ({filteredMonsters}) => {
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

export default Cardlist;

