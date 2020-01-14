import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }

  flipImage = () => {
    this.setState({
      front: !this.state.front
    })
  }

  render() {
    const {name, stats, sprites} = this.props.pokemon
    const hp = stats.find(stat => stat.name === 'hp').value

    return (
      <Card onClick={this.flipImage}>
        <div>
          <div className="image">
            <img src={this.state.front ? sprites.front : sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
