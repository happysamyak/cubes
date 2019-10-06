import React, {Component} from 'react'
import Meal from "./meal"
import "./mealBook.css"

class MealBook extends Component {
    
  constructor(props) {
    super(props)
  }

  
  render() {

    const mealsDetails = [
      {
      id:1,
      title: "Curd Rice",
      price: "₹500",
      Address: "Kadubisanhalli",
      imgPath: "1.jpeg"
    }, {
      id:2,
      title: "Salad",
      price: "₹600",
      Address: "Yashwanthpur",
      imgPath: "2.jpeg"
    }, {
      id:3,
      title: "Manchurian",
      price: "₹550",
      Address: "JP nagar",
      imgPath: "3.jpeg"
    }, {
      id:4,
      title: "Fried Rice",
      price: "₹600",
      Address: "Kadubisanhalli",
      imgPath: "4.jpeg"
    }, {
      id:5,
      title: "Fruit Bowl",
      price: "₹550",
      Address: "Sarjapura signal",
      imgPath: "5.jpeg"
    }, {
      id:6,
      title: "Tomatoes Grilled",
      price: "₹500",
      Address: "Bellandur",
      imgPath: "6.jpeg"
    }, {
      id:7,
      title: "Brocolli",
      price:"₹ 98",
      Address: "JP nagar",
      imgPath: "7.jpeg"
    }, {
      id:8,
      title: "Special",
      price: "₹500",
      Address: "Kadubisanhalli",
      imgPath: "8.jpeg"
    }];
  
    return (
      <div className="mealDetails">{ mealsDetails.map((c,i)=><Meal key={i} details={c}></Meal>)}</div>  
    );
  }
  
}
export default MealBook;