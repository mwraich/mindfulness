import React, { Component } from 'react';
import HomePage from './HomePage'
import CreateSession from './CreateSession'
import JoinSession from './JoinSession'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

library.add(faUsers)

class App extends Component {
  state = {
    componentToShow: 'homepage'
  }

  startJourney = componentToShow => this.setState({ componentToShow })
  
  render() {
    const { componentToShow } = this.state
    return (
      <div>
        { componentToShow === 'homepage' && <HomePage startJourney={this.startJourney} /> }
        { componentToShow === 'createSession' && <CreateSession/> }
        { componentToShow === 'joinSession' && <JoinSession/> }
      </div>

    )
  }
}

export default App;

