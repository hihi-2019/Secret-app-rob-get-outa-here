import React from 'react'
import request from 'superagent'
import { getRecentPhotos } from '../api/apiFetchImage'

//Populated with images from external photography API(s)
class RecentPhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    request.get('/api/recent-images/1')
      .then(res => {
        console.log(res.body)
        this.setState({
          images: res.body.map(image => `/images/${image.img_filename}`)
        })
      })
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({ images: [] }, () => {
      for (let i = 0; i < 9; i++) {

        setTimeout(() => {
          getRecentPhotos()
          .then(res => {
            let ts = Math.round((new Date()).getTime())
            const newState = [...this.state.images]
            newState.push(res.req.url)
            this.setState({
              images: newState
            })
          })
        }, i*3500)
        
        // getRecentPhotos()
        //   .then(res => {
        //     let ts = Math.round((new Date()).getTime())
        //     const newState = [...this.state.images]
        //     newState.push(res.req.url + '?t=' + ts)
        //     this.setState({
        //       images: newState
        //     })
        //   })
      }
    })
  }



  render() {

    return (

      <React.Fragment>

        <div className="py-4 px-4">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h5 className="mb-0">Recent photos</h5><button href="#" className="btn btn-outline-dark btn-sm" onClick={this.handleClick}>Randomise Photos</button>
          </div>
          <div className="row">
            {this.state.images && (

              this.state.images.map(image => {
                return (

                  <div className="col-lg-6 mb-2 pr-lg-1">
                    <img src={image} alt="" className="img-fluid rounded shadow-sm" />
                  </div>
                )
              })

            )}
          </div>
        </div>
      </React.Fragment >
    )

  }

}

export default RecentPhotos