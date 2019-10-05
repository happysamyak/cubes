import React, {Component} from 'react'
class Cube extends Component {
    
  constructor(props) {
    super(props)
  }

  
  render() {
  
    return (
        <>
            <div className="cube-box">
                <img src={"./images/office/"+this.props.details.imgPath}></img>
                <span className="cube-name">{this.props.details.title}</span>
                <span className="cube-price">{this.props.details.price}</span>
                <span className="cube-address">{this.props.details.Address}</span>
                <span className="cube-rating">{this.props.details.rating}</span>
                <span className="cube-seatsAvailble">{this.props.details.seatsAvailble}</span>
            </div>
        </>
    );
  }
  
}
export default Cube;