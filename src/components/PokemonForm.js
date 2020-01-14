import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }


  updateText = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const {name, hp, frontUrl, backUrl} = this.state
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        stats: [{
          name: 'hp',
          value: hp
        }],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
    .then(res => res.json())
    .then(pokemon => this.props.addPokemon(pokemon))
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={this.updateText} value={this.state.name} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid onChange={this.updateText} value={this.state.hp} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid onChange={this.updateText} value={this.state.frontUrl} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid onChange={this.updateText} value={this.state.backUrl} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
