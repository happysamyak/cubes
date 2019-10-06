import React, {Component} from 'react'
class Cube extends Component {
    
  constructor(props) {
    super(props)
  }

  
  render() {
  
    return (
        <>
            <div className="cube-box">
                <img className="cube-img" src={"./images/office/"+this.props.details.imgPath}></img>
                <div className="cube-meta-div">
                  <span className="cube-name">{this.props.details.title}</span>
                  <span className="cube-address">{this.props.details.Address}</span>
                  <span className="cube-price">₹{this.props.details.price}</span>
                  <div className="cube-rating-container">
                    <span className="cube-rating-label"> Rating - </span>
                    <span className="cube-rating-value">{this.props.details.rating}</span>
                  </div>
                  <div className="cube-seatsAvailble-container">
                    <span className="cube-seatsAvailble-label">Available seats - </span>
                    <span className="cube-seatsAvailble-value">{this.props.details.seatsAvailble}</span>
                  </div>
                  <button className="book-now-button">Book Now</button>
                </div>
                
            </div>
        </>
    );
  }
  
}
export default Cube;