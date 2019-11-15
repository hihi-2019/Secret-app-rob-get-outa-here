import React from 'react'
import { getKanyeLyrics } from '../api/apiFetchLyrics'
import { getRelStatus } from '../api/apiRelationshipStatus'
import { getBeer } from '../api/apiFetchBeer'





class BioContent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      age: this.randomAge(),
      quote: 'I love dogs',
      relationshipStatus: 'Polyamorous',
      favouriteBeer: 'Tui - India Pale Ale'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()

    getKanyeLyrics()
    .then(res => {
      this.setState({
        age: this.randomAge(),
        quote: res.quote,
      })
    })

    getRelStatus()
    .then(res => {
      this.setState({
        relationshipStatus: res,
      })
    })

    getBeer()
    .then(res => {
      this.setState({
        favouriteBeer: res,
      })
    }

  )}



  randomAge() {
    return Math.floor(Math.random() * 20) + 65
  }

  render() {
    return (
      <>
        <div className='px-4 py-3'>
          <div className='p-4 rounded shadow-sm bg-light'>
          <h5 className='mb-0'>Bio</h5>
            <p className='font-italic mb-0'>Age: {this.state.age}</p>
            <p className='font-italic mb-0'>
              Favourite Quote: {this.state.quote}
            </p>
            <p className='font-italic mb-0'>
              Relationship Status: {this.state.relationshipStatus}
            </p>
            <p className='font-italic mb-0'>
              Favourite Beer: {this.state.favouriteBeer.name}
            </p>
            </div>
            <div>
              <br></br>
            <button
              onClick={this.handleClick}
              className='btn btn-outline-dark btn-sm'
            >
              Randomise Bio
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default BioContent
