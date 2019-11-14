import React from 'react'

//contains a banner image, profile pic
class Banner extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      profileImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      profileName: 'Mark Williams',
      nickname: "'Big Dog'",
      city: 'Christchurch'
    }
  }

  render () {
  return (

    <div className="px-4 pt-0 pb-4 cover">
      <div id="profileImage" className="media align-items-end profile-head">
        <div className="profile mr-3"><img src={this.state.profileImage} alt="..." width="130" className="rounded mb-2 img-thumbnail"></img>
          <a href="#" className="btn btn-outline-dark btn-sm btn-block">Randomise profile</a>
        </div>
        <div className="media-body mb-5">
          <h4 className="mt-0 mb-0">Name: {this.state.nickname} {this.state.profileName}</h4>
          <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>{this.state.city}</p>
        </div>
      </div>
    </div>

  )
  }
}

export default Banner