import React from 'react';
import Header from './Header';
import MiniCard from './MiniCard';
import InfoCard from './InfoCard';

class Main extends React.Component { 
  state = {
    initialUrl: "https://pokeapi.co/api/v2/pokemon",
    initialApiData: [],
    pokemonsData: [],
    pokemonByDataId: '',
    nextUrl: '',
    isClicked: false,
  }
   
    componentDidMount() {
        this.makePokemonApiCall()
    }

    onClickMiniCard = (pokemonByDataId) => {
        this.setState({
            pokemonByDataId,
        })
    }

    onClickNextBtn = () => {
        this.setState({
            isClicked: true
        },this.callNextPokemons)
    }

    callNextPokemons = () => {
        const {isClicked, nextUrl, initialUrl} = this.state 
        if (isClicked) {
           this.setState({
            pokemonsData: [],
            initialUrl: nextUrl
           }, this.makePokemonApiCall)
    }
}

    makePokemonApiCall = async ()=> {
        const {initialUrl} = this.state 

        const response = await fetch(initialUrl)
        const data = await response.json()
        this.getPokemons(data.results)
        this.setState({
            nextUrl: data.next
        })
    }

    getPokemons = async (results) => {
       results.map(async (eachResult) => {
        const response = await fetch(eachResult.url)
        const data = await response.json()
        this.setState((prevState) => ({
            pokemonsData: [...prevState.pokemonsData, data]
        }))
       })
    }

    renderMiniCardView = () => {
        const {pokemonsData} = this.state 
        return (
            <>   
            {pokemonsData.map((pokemon) => 
            <MiniCard key = {pokemon.id}  data = {pokemon} onClickMiniCard = {this.onClickMiniCard}/>)}
            </>
        )
    }

    renderInfoCardView = () => { 
        const {pokemonByDataId} = this.state 
        console.log(pokemonByDataId)
       return (
        <>   
       {!pokemonByDataId ? <h1>Click on the Pokemon to see Info</h1> : <InfoCard pokeData={pokemonByDataId} />}
        </>
       )
    }

    render() {
       const {nextUrl} = this.state 
      
        return (
            <>
                <Header/>
            <div className="app-bg">
                <div className="app-card-container">
                <div className='left-section'>   
                    <ul className='ul-left-container'>
                        {this.renderMiniCardView()}
                    </ul>
                    <div className='buttons-container'>
                        <button type = "button">Previous</button>
                        <button type = "button" onClick = {this.onClickNextBtn}>Next</button>
                    </div>
                    </div>
                    <div className='right-section'>
                        {this.renderInfoCardView()}
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Main