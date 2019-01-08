import React, { Component } from "react";
import countries from "./countries.js"

class Marsform extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      month: 0,
      day: 0,
      year: 0,
      country: "",
      diet: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // let {name} = this.state
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  displayYears() {
    let years = [];
    for (let i = 2019; i > 1900; i--) {
      years.push(<option>{i}</option>);
    }
    return years;
  }

  displayDays() {
    let days = [];
    for(let i = 31; i > 0; i--){
      days.push(<option>{i}</option>)
    }
    return days;
  }

  originCountry(event){
    // this.setState({
    // country: event.target.value
    // })
    countries.map((item) => {
return item
})
}







  displayMonths(){
    let newArr = []
    let months = ["January","Feburary","March",
  "April","May","June","July","August","September","October","November","December"]
  for(let i = 0; i < months.length; i++){
     newArr.push(<option>{months[i]}</option>)
  }
return newArr
  }

  render() {
    console.log(this.state);


    let years = this.displayYears();
    let days = this.displayDays();
    let months = this.displayMonths();
    let items = this.originCountry()
    let {diet} = this.state
    return (
      <>
        <h1>Mission To Mars Registration Form</h1>
        <div>
          <form onChange={this.handleChange}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={this.state.name} id="name" />
            <br />

            <select name="year" onChange={this.handleChange}>{years}</select>

            <select name="day" onChange={this.handleChange}>{days}</select>

            <select name="month" onChange={this.handleChange}>{months}</select>

            <select name="country"
            onChange={this.originCountry} value{...this.state.country}>{items} </select>

            <p>What is your Dietary Preference?</p>
            <select name="diet"
            onChange={this.handleChange}
            <option>omnivore</option>
            <option>vegetarian</option>
            <option>vegan</option>
            </select>
          </form>
        </div>
      </>
    );
  }
}



export default Marsform;
