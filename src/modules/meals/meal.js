import React, {Component} from 'react'
import Counter from './counter'
class Meal extends Component {
    
  constructor(props) {
    super(props)
  }

  
  render() {
  
    return (
        <>
            <div className="meal-box col-xs-12 col-sm-4">
              <div className="meal-image-container">
              <img src={"./images/meals/"+this.props.details.imgPath}></img>
              </div>
              <div className="meal-details-container">
                <div className="meal-detail">{this.props.details.title}</div>
                <div className="meal-detail">{this.props.details.Address}</div>
                <div className="meal-detail">{this.props.details.price}
                <Counter/>
                </div>
              </div>
            </div>
        </>
    );
  }
  
}
export default Meal;