import React from 'react'
import request from 'superagent'

//Populated with images from external photography API(s)
class RecentPhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    request.get('/api/recent-images/1')
      .then(res => {
        console.log(res.body)

        this.setState({
          images: res.body
        })
      })
  }

  render() {

    return (

      <React.Fragment>

        <div className="py-4 px-4">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h5 className="mb-0">Recent photos</h5><a href="#" className="btn btn-link text-muted">Show all</a>
          </div>
          <div className="row">
            {this.state.images && (
              
                this.state.images.map(image => {
                  return( 
               
                  <div className="col-lg-6 mb-2 pr-lg-1">
                    <img src={`./images/${image.img_filename}`} alt="" className="img-fluid rounded shadow-sm" />
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