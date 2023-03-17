const InfoCard = ({pokeData}) => {
    const {name, abilities, stats, weight, height, sprites} = pokeData
    return (
        <div className="info-card">
            <h2 className="pokemon-info-name">{name}</h2>
            <img src = {sprites?.other?.dream_world?.front_default} alt = {name} className = "poke-info-img"/>
            <div className="ability-container">
                {abilities.map((a) => {
                    return (
                        <h3>Ability : {a.ability.name}</h3>
                    )
                })}
            </div>
            <div className="stats-container">
                {stats.map((s) => {
                    return (
                        <h4>{s?.stat?.name}: {s.base_stat}</h4>
                    )
                })}
            </div>
            <h4>Height: {height}</h4>
            <h4>Weight: {weight}</h4>
        </div>
    )
}

export default InfoCard