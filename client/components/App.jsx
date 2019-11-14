import React, { Component } from 'react'

import Banner from './Banner'
import BioContent from './BioContent'
import RecentPhotos from './RecentPhotos'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Banner />
        <BioContent />
        <RecentPhotos />
      </div>
    )
  }
}

export default App
