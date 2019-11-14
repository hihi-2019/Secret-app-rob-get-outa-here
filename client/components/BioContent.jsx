import React from 'react'

//Profile bio including age, favourite song lyrics, hometown, family (populated by something funny), relationship status

class BioContent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      age: this.randomAge(),
      quote: 'I love dogs',
      relationshipStatus: 'Polyamorous',
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({
      age: this.randomAge(),
      quote: '',
      relationshipStatus: '',
    })
  }

  randomAge() {
    return Math.floor(Math.random() * 20) + 24
  }

  render() {
    return (
      <>
        <div className='px-4 py-3'>
          <h5 className='mb-0'>About</h5>
          <div className='p-4 rounded shadow-sm bg-light'>
            <p className='font-italic mb-0'>Age: {this.state.age}</p>
            <p className='font-italic mb-0'>
              Favourite song lyrics: {this.state.quote}
            </p>
            <p className='font-italic mb-0'>Relationship Status: {this.state.relationshipStatus}</p>
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
