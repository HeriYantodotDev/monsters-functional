import './card.style.css';

const Card = (props) => {
    const {id, name, email} = props.monster
    return (
        <div className="card-container">
            <img alt={`${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
         </div>
    )
}

export default Card