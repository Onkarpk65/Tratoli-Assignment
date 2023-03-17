const MiniCard = (props) => {
    const {data, onClickMiniCard} = props

    const onClickPokemon = () => {
        onClickMiniCard(data)
    }
    return (
        <li className="min-card" onClick={onClickPokemon}>   
        <h2 className="poke-name">{data.name}</h2>
        <img src = {data.sprites.front_default} alt = {data.name}  className = "poke-img"/>
        </li>
    )
}

export default MiniCard