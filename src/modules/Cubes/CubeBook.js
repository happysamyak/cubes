import React, {Component} from 'react'
import Cube from "./cube";
import "./cubeBook.css";
class CubeBook extends Component {
  initialState = {}
  constructor(props) {
    super(props);
    this.initialState = {
      mon: "1",
      tue: "2",
      wed: "3",
      thr: "",
      fri: "",
      sat: "",
      sun: "",
      cubeDetails: []
    }

    this.state = this.initialState;
  }
  
  updateWeekDay = (day, id) => {
    this.setState({
      [day]: this.initialState[day] == id ? "" : id
    })
    this.initialState[day] = this.initialState[day] == id ? "" : id;
  }
  componentDidMount() {
    return fetch("./data/api-data.json")
      .then(res => {
        console.log("res1", res)
        return res.json()
      }).then(res =>{
        console.log("res", res);
        this.setState({
          cubeDetails: res
        })
        // const cubeDetails = res;
      })
  }
  
  render() {
    
    
   // return (
      // let cubeArr = [];
      //   for(let i=0;i<5;i++) {
      //     cubeArr.push(<Cube key={i} details={cubeDetails[i]}></Cube>)
        //}
        let len = this.state.cubeDetails.length;
        return (<div className="cube-container">
                <div class="box-column">
                { this.state.cubeDetails.slice(0,len/4).map((c,i)=><Cube key={i} details={c} weekData={this.initialState} updateWeekDay={this.updateWeekDay}></Cube>)}
                </div>
                <div class="box-column">
                { this.state.cubeDetails.slice(len/4,len/2).map((c,i)=><Cube key={i} details={c} weekData={this.initialState} updateWeekDay={this.updateWeekDay}></Cube>)}
                </div>
                <div class="box-column">
                { this.state.cubeDetails.slice(len/2,(3 *len)/4).map((c,i)=><Cube key={i} details={c} weekData={this.initialState} updateWeekDay={this.updateWeekDay}></Cube>)}
                </div>
                <div class="box-column">
                { this.state.cubeDetails.slice((3 *len)/4, len).map((c,i)=><Cube key={i} details={c} weekData={this.initialState} updateWeekDay={this.updateWeekDay}></Cube>)}
                </div>
                </div>);
   // );
  }
  
}
export default CubeBook;