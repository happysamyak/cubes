import React, {Component} from 'react'
import Cube from "./cube";
import "./cubeBook.css";
class CubeBook extends Component {
    
  constructor(props) {
    super(props)
  }
  
  
  render() {
    const cubeDetails = [
      {
      id:1,
      title: "Salarpuria",
      price: 500,
      Address: "Kadubisanhalli",
      rating: 4,
      seatsAvailble: 21,
      imgPath: "1.jpeg"
    }, {
      id:2,
      title: "Orion mall",
      price: 600,
      Address: "Yashwanthpur",
      rating: 3.5,
      seatsAvailble: 11,
      imgPath: "2.jpeg"
    }, {
      id:3,
      title: "Gopalan",
      price: 550,
      Address: "JP nagar",
      rating: 4,
      seatsAvailble: 1,
      imgPath: "3.jpeg"
    }, {
      id:4,
      title: "Cessana",
      price: 600,
      Address: "Kadubisanhalli",
      rating: 4.5,
      seatsAvailble: 2,
      imgPath: "4.jpeg"
    }, {
      id:5,
      title: "Sun city",
      price: 550,
      Address: "Sarjapura signal",
      rating: 3,
      seatsAvailble: 21,
      imgPath: "5.jpeg"
    }, {
      id:6,
      title: "Central Bellandur",
      price: 500,
      Address: "Bellandur",
      rating: 4,
      seatsAvailble: 11,
      imgPath: "6.jpeg"
    }, {
      id:7,
      title: "Purva Complex",
      price: 400,
      Address: "JP nagar",
      rating: 3,
      seatsAvailble: 1,
      imgPath: "7.jpeg"
    }, {
      id:8,
      title: "DSR Emerald",
      price: 500,
      Address: "Kadubisanhalli",
      rating: 4,
      seatsAvailble: 2,
      imgPath: "8.jpeg"
    }];
   // return (
      // let cubeArr = [];
      //   for(let i=0;i<5;i++) {
      //     cubeArr.push(<Cube key={i} details={cubeDetails[i]}></Cube>)
        //}
        
        return (<div className="cube-container">{ cubeDetails.map((c,i)=><Cube key={i} details={c}></Cube>)}</div>);
   // );
  }
  
}
export default CubeBook;