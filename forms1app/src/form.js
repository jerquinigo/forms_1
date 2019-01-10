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
      diet: "",
      marsReason: "",
      message: "",
      thankYouMessage: "",
      submit1: false,
      submit2: false,
      step: 1,
      underWater: "",
      marital: "",
      claustrophobic: ""

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.confirmedSubmit = this.confirmedSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
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
      years.push(
        <option key={i}>{i}</option>
      );
    }
    return years;
  }

  displayDays() {
    let days = [];
    for(let i = 31; i > 0; i--){
      days.push(<option key={i}>{i}</option>)
    }
    return days;
  }

  originCountry(event){
    let results = countries.map(country => {
      return <option key={country.name} >{country.name} {country.code}</option>
    })
    return results
}

handleSubmit(event){
  event.preventDefault();
  this.setState({
    message: "form completed",
    step: 2,
    submit1: true


  })
}

confirmedSubmit(){
  this.setState({
    message: "thank you for your application",
    submit1: false,
    submit2: true,
    step: 3
  })
}

resetForm(){
  this.setState({
    step: 1
  })
}


  displayMonths(){
    let newArr = []
    let months = ["January","Feburary","March",
  "April","May","June","July","August","September","October","November","December"]
  for(let i = 0; i < months.length; i++){
     newArr.push(<option key={months[i]}>{months[i]}</option>)
  }
return newArr
  }

  render() {
    console.log(this.state);
    let {name, month, day, year, country, diet, marsReason, message, thankYouMessage, step} = this.state
    // let {diet} = this.state;
    let years = this.displayYears();
    let days = this.displayDays();
    let months = this.displayMonths();
    let theCountry = this.originCountry();

if(this.state.step === 1){
    return (
      <>

        <h1>Mission To Mars Registration Form</h1>
        <div>

      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>

            <label htmlFor="name">Name</label>
            <input onChange={this.handleChange} type="text" name="name" value={this.state.name} id="name" />
            <br />

            <label> pick your date </label>
            <select name="year" value={this.year}onChange={this.handleChange}>
              <option selected disabled value="">Year</option>{years}
            </select>

            <select name="day" onChange={this.handleChange}>{days}
            </select>

            <select name="month" onChange={this.handleChange}>{months}</select>

            <br />
            <label htmlFor="country"> What is your country of origin </label>
            <select name="country" onChange={this.handleChange}>{theCountry}
            </select>
            <br />

          <label htmlFor="diet"> What is your dietary preference </label>
              <select name="diet" onChange={this.handleChange}>
                <option>omnivore</option>
                <option>vegetarian</option>
                <option>vegan</option>
              </select>

            <label htmlFor="why">What is your reason to be A mars explorer </label>
                <input onChange={this.handleChange} type="text" name="why" value={this.marsReason}></input>

                <p>Can you hold your Breath Underwater for 1 min?</p>
                      <input type="radio" name="underWater" value="yes"/>
                        <label htmlFor="underWater">Yes</label>
                        <br />
                      <input type="radio" name="underWater" value="no" />
                        <label htmlFor="underWater">No</label>
                        <br />
                      <input type="radio" name="underWater" value="i don't know" />
                        <label htmlFor="underWater">I dont know</label>
                <br />

                <p>What is your marital status?</p>
                  <input type="radio" name="marital" value="Married"/>
                    <label htmlFor="marital">Married</label>
                    <br />
                  <input type="radio" name="marital" value="Not Married"/>
                    <label htmlFor="martial">Not Married</label>
                <br />

                <p>When you are in a stressful or difficult situation, how do you most frequently react?</p>
                  <input type="radio" name="stressful" value="Determination" />
                    <label htmlFor="stressful">Determination: I continue to confront the situation.</label>
                  <br />
                  <input type="radio" name="stressful" value="Defeat" />
                    <label htmlFor="stressful">Defeat: I stop confronting the situation.</label>
                  <br />
                  <input type="radio" name="stressful" value="Anger" />
                    <label htmlFor="stressful">Anger: I become upset at the situation.</label>
                  <br />
                  <input type="radio" name="stressful" value="Resourcefulness"/>
                    <label htmlFor="stressful">Resourcefulness: I seek help to confront the situation.</label>
                <br />

              <p>Are you claustrophobic?</p>
              <input type="radio" name="claustrophobic" value="yes" />
                <label htmlFor="claustrophobic">Yes</label>
                <br />
              <input type="radio" name="claustrophobic" value="no" />
                <label htmlFor="claustrophobic">No</label>
                <br />
              <input type="radio" name="claustrophobic" value="i don't know" />
                <label htmlFor="claustrophobic">I don't Know </label>
                <br />
                <input  type="submit" checked={"this is finished"}value="SUBMIT" />


          </form>

        </div>


        {this.state.message}


      </>
    )
  }else if(this.state.step === 2){
    return(
      <>
    <p>your name is: {name}</p>
    <p>your date of birth is {month} {day} {year}</p>
    <p>your country is {country}</p>
    <p>your diet is {diet}</p>
    <p>your reason to go to mars is: {marsReason}</p>
    <p>your message is {message}</p>
    <p>is the information here correct?</p>
    <button onClick={this.confirmedSubmit}>submit</button>

    </>
    )
  }
  else if(this.state.step === 3){
    return(
      <>
      <h2>{this.state.message}</h2>
      <button onClick={this.resetForm}> Click to reset </button>
      </>
    )
  }
}
};

// <input onSubmit={this.handleSubmit.formCompleted = false} type="submit" value="SUBMIT" />



export default Marsform;
