import React from 'react'
import {getProfileImage} from '../api/apiFetchImage'
import {getCity, getCountry} from '../api/apiFetchCity'

//contains a banner image, profile pic
class Banner extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      profileImage:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
      profileName: 'Mark Williams',
      nickname: "'Big Dog'",
      city: 'Christchurch',
      country: 'New Zealand'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    let ts = Math.round((new Date()).getTime() / 1000)
    getProfileImage()
    .then(res => {
      this.setState({
        profileImage: res.req.url+'#'+ts
      })
    })
    getCity()
    .then(res => {
      this.setState({
        city: res
      })
    })
    getCountry()
    .then(res => {
      this.setState({
        country: res
      })
    })
  }

  render() {
    return (
      <div className='px-4 pt-0 pb-4 cover banner'>
        <div className='media align-items-end profile-head'>
          <div className='profile mr-3'>
            <img
              src={this.state.profileImage}
              alt='...'
              id='profileImage'
              className=' mb-2'
            ></img>
          </div>

          <div className='media-body profileName'>
            <h2 className='mt-0 mb-0 '>
              {this.state.nickname} {this.state.profileName}
            </h2>
            <h5 className='mb-4'>
              {this.state.city}, {this.state.country}
            </h5>
            <button
              onClick={this.handleClick}
              className='btn btn-outline-dark btn-sm'
            >
              Randomise profile
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner