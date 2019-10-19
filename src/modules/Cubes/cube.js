import React, {Component} from 'react'
class Cube extends Component {
    
  constructor(props) {
    super(props)
  }

  getClassName(day, week, id) {
    if(week[day]) {
      if(week[day] == id) {
        return "selected"
      } else {
        return "Booked"
      }
    }
    return ""
  }
  
  bookcube(day, week, id) {
    return () => {
      console.log(day, week, id);
      this.props.updateWeekDay(day, id);
    }
    
    //this.bookcube;
  }
  render() {
  
    return (
        <>
            <div className="cube-box hidden">
                <div>
                  <span className="cube-name">{this.props.details.title}</span>
                  <span className="cube-address">{this.props.details.Address}</span>
                </div>
                <div className="cube-img">
                  <img src={"./images/office/"+this.props.details.imgPath}></img>
                </div>
                <div className="cube-meta-div">
                  
                  <span className="cube-price">₹{this.props.details.price}</span>
                  <div className="cube-rating-container">
                    <span className="cube-rating-label"> Rating - </span>
                    <span className="cube-rating-value">{this.props.details.rating}</span>
                  </div>
                  <div className="cube-seatsAvailble-container">
                    <span className="cube-seatsAvailble-label">Available seats - </span>
                    <span className="cube-seatsAvailble-value">{this.props.details.seatsAvailble}</span>
                  </div>
                  <div className="book-now-button"> 
                    <button onClick={this.bookcube("mon", this.props.weekData, this.props.details.id)} className={this.getClassName("mon", this.props.weekData, this.props.details.id)} >Mon</button>
                    <button onClick={this.bookcube("tue", this.props.weekData, this.props.details.id)} className={this.getClassName("tue", this.props.weekData, this.props.details.id)}>Tue</button>
                    <button onClick={this.bookcube("wed", this.props.weekData, this.props.details.id)} className={this.getClassName("wed", this.props.weekData, this.props.details.id)}>Wed</button>
                    <button onClick={this.bookcube("thr", this.props.weekData, this.props.details.id)} className={this.getClassName("thr", this.props.weekData, this.props.details.id)}>Thur</button>
                    <button onClick={this.bookcube("fri", this.props.weekData, this.props.details.id)} className={this.getClassName("fri", this.props.weekData, this.props.details.id)}>Fri</button>
                    <button onClick={this.bookcube("sat", this.props.weekData, this.props.details.id)} className={this.getClassName("sat", this.props.weekData, this.props.details.id)}>Sat</button>
                    <button onClick={this.bookcube("Sun", this.props.weekData, this.props.details.id)} className="disabled" disabled>Sun</button>
                  </div>
                </div>  
                
            </div>
        </>
    );
  }
  
}
export default Cube;