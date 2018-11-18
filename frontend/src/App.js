import React, { Component } from 'react';
import HomePage from './HomePage'
import CreateSession from './CreateSession'
import JoinSession from './JoinSession'
import Profile from './Profile'
import ActivityPage from './ActivityPage.png'

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
        { componentToShow === 'createSession' && <CreateSession startJourney={this.startJourney}/> }
        { componentToShow === 'joinSession' && <JoinSession startJourney={this.startJourney}/> }
        { componentToShow === 'profile' && <Profile startJourney={this.startJourney}  /> }
        { componentToShow === 'activityPage' && <a href="https://www.mindfulnessstudies.com/wp-content/uploads/2018/03/Three-Minute-Breathing-Space.mp3" target="_blank" ><img src={ActivityPage}/></a>  }
 
      </div>

    )
  }
}

export default App;
