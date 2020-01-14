import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ''
  }


  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokeArray => this.setState({
      pokemon: pokeArray
    }))
  }


  updateSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
    console.log(this.state.searchTerm)
  }


  addPokemon = (pokemon) => {
    this.setState({
      pokemon: [pokemon, ...this.state.pokemon]
    })
  }



  render() {
    const pokemon = this.state.pokemon
    const desiredPokemon = pokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.updateSearchTerm} searchTerm={this.state.searchTerm}/>
        <br />
        <PokemonCollection pokemon={desiredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
