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
      claustrophobic: "",
      familyHistory: {
        cancer:false,
        heartDisease:false,
        diabetes:false

      },
      living: {
        siblings:false,
        parents:false,
        grandparents:false
      },
      siblingsNum: 0,
      parentsNum: 0,
      grandparentsNum:0,
      education: {
        highSchool:false,
        associate:false,
        bachelors:false,
        masters:false,
        phd:false,
        other:false
      },
      otherTextbox:""


    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.confirmedSubmit = this.confirmedSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.livingRelatives = this.livingRelatives.bind(this);
  }

  handleChange(event) {
    // let {name} = this.state
    // debugger;
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleCheckboxChange(event){

    if(event.target.id){
    let newState = this.state[event.target.name];

          newState[event.target.id] = event.target.checked;
          this.setState({
            [event.target.name]: newState
          })
          console.log(event.target.checked)
        }
        else {
          // Using es6 computed property name
          this.setState({
            [event.target.name]: event.target.checked
          });
        }

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

livingRelatives(num){

  let arr = [];
  for(let i=1; i<=num; i++){
    arr.push(i);
  }
  let newArr = arr.map(el => {
    return <option>{el}</option>
  })
  return newArr
  // living: {
  //   siblings:false,
  //   parents:false,
  //   grandparents:false
  // },
  // if(this.state.living.siblings === true){

  //   let siblings = [];
  //     for(let i = 5; i > 0; i--){
  //       siblings.push(<option key={i}>{i}</option>)
  //     }
  //       return (
  //         <select>
  //           <option disabled>please select value</option>
  //           {siblings}
  //           </select>
  //               )
  //
  // }else if(this.state.living.parents === true){
  //   let parents = [];
  //     for(let i = 2; i > 0; i--){
  //       parents.push(<option key={i}>{i}</option>)
  //     }
  //     return(
  //       <select>
  //         <option disabled>please select value</option>
  //         {parents}
  //       </select>
  //     )
  // }
} //closing livingRelatives function brace

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


// onChange={this.handleChange}
  render() {
    console.log(this.state);
    console.log(this.state.familyHistory)
    console.log(this.state.living)
    console.log(this.state.siblingsNum)
    console.log(this.state.parentsNum)
    console.log(this.state.grandparentsNum)
    console.log(this.state.education.highSchool)
    console.log(this.state.otherText)
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

      <form  onSubmit={this.handleSubmit}>

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
                      <input  onChange={this.handleChange} type="radio" name="underWater" value="yes"/>
                        <label htmlFor="underWater">Yes</label>
                        <br />
                      <input onChange={this.handleChange} type="radio" name="underWater" value="no" />
                        <label htmlFor="underWater">No</label>
                        <br />
                      <input onChange={this.handleChange} type="radio" name="underWater" value="i don't know" />
                        <label htmlFor="underWater">I dont know</label>
                <br />

                <p>What is your marital status?</p>
                  <input onChange={this.handleChange} type="radio" name="marital" value="Married"/>
                    <label htmlFor="marital">Married</label>
                    <br />
                  <input onChange={this.handleChange} type="radio" name="marital" value="Not Married"/>
                    <label htmlFor="martial">Not Married</label>
                <br />

                <p>When you are in a stressful or difficult situation, how do you most frequently react?</p>
                  <input onChange={this.handleChange} type="radio" name="stressful" value="Determination" />
                    <label htmlFor="stressful">Determination: I continue to confront the situation.</label>
                  <br />
                  <input onChange={this.handleChange} type="radio" name="stressful" value="Defeat" />
                    <label htmlFor="stressful">Defeat: I stop confronting the situation.</label>
                  <br />
                  <input  onChange={this.handleChange} type="radio" name="stressful" value="Anger" />
                    <label htmlFor="stressful">Anger: I become upset at the situation.</label>
                  <br />
                  <input onChange={this.handleChange} type="radio" name="stressful" value="Resourcefulness"/>
                    <label htmlFor="stressful">Resourcefulness: I seek help to confront the situation.</label>
                <br />

              <p>Are you claustrophobic?</p>
              <input  onChange={this.handleChange} type="radio" name="claustrophobic" value="yes" />
                <label htmlFor="claustrophobic">Yes</label>
                <br />
              <input  onChange={this.handleChange} type="radio" name="claustrophobic" value="no" />
                <label htmlFor="claustrophobic">No</label>
                <br />
              <input onChange={this.handleChange} type="radio" name="claustrophobic" value="i don't know" />
                <label htmlFor="claustrophobic">I don't Know </label>
                <br />

                <p>Does your family have a history of (check all that apply):
                </p>
                <input id="cancer" onChange={this.handleCheckboxChange} checked={this.state.familyHistory.cancer}type="checkbox" name="familyHistory" value="cancer" />
                  <label htmlFor="familyHistory">Cancer</label>
                  <br />
                <input id="heartDisease" onChange={this.handleCheckboxChange} checked={this.state.familyHistory.heartDisease}type="checkbox" name="familyHistory" value="heart disease" />
                  <label htmlFor="familyHistory">Heart Disease</label>
                  <br />
                <input id="diabetes" checked={this.state.familyHistory.diabetes} onChange={this.handleCheckboxChange} type="checkbox" name="familyHistory" value="diabetes" />
                  <label htmlFor="familyHistory">Diabetes</label>
              <br />

              <p>Do you have any living (check all that apply):</p>
              <input id="siblings" onChange={this.handleCheckboxChange} checked={this.state.living.siblings}type="checkbox" name="living" value="siblings" />
                <label htmlFor="living">Siblings?</label>
                  {this.state.living.siblings?(
                    <select name="siblingsNum" onChange={this.handleChange}>
                      <option disabled> How many?</option>
                      {this.livingRelatives(10)}
                    </select>): null}
                <br />
                <input id="parents" onChange={this.handleCheckboxChange} checked={this.state.living.parents} type="checkbox" name="living" value="parents" />
                  <label html="living">Parents?</label>
                  {this.state.living.parents?(
                    <select name="parentsNum" onChange={this.handleChange}>
                      <option disabled> How many?</option>
                      {this.livingRelatives(2)}
                    </select>): null}

                  <br />
                <input id="grandparents" onChange={this.handleCheckboxChange} checked={this.state.living.grandparents} type="checkbox" name="living" value="grandparents" />
                  <label htmlFor="living" >Grandparents?</label>
                    {this.state.living.grandparents?(
                      <select name="grandparentsNum" onChange={this.handleChange}>
                        <option disabled> How many?</option>
                        {this.livingRelatives(4)}
                      </select>): null}
                      <br />

                <p>Check all educational credentials you have received:</p>
                <input id="highSchool" onChange={this.handleCheckboxChange} checked={this.state.education.highSchool} type="checkbox" name="education" value="high school"/>
                  <label htmlFor="education">High school diploma or GED equivalent</label>
                  <br />
                <input id="associate" onChange={this.handleCheckboxChange} checked={this.state.education.associate} type="checkbox" name="education" value="associates Degree" />
                  <label htmlFor="education">Associate's Degree</label>
                  <br />
                <input id="bachelors" onChange={this.handleCheckboxChange} checked={this.state.education.bachelors} type="checkbox" name="education" value="bachelors Degree" />
                  <label htmlFor="education">Bachelor's Degree</label>
                  <br />
                <input id="masters" onChange={this.handleCheckboxChange} checked={this.state.education.masters} type="checkbox" name="education" value="masters Degree" />
                  <label htmlFor="education">Master's Degree</label>
                  <br />
                <input id="phd" onChange={this.handleCheckboxChange} checked={this.state.education.phd} type="checkbox" name="education" value="phd" />
                  <label htmlFor="education">PhD</label>
                  <br />
                <input id="other" onChange={this.handleCheckboxChange} checked={this.state.education.other} type="checkbox" name="education" value="other" />
                  <label htmlFor="education">Other</label>
                <input onChange={this.handleChange} type="text" name="otherText"/>
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
    <p>Can you hold your breathe underwater for one min? {this.underWater}</p>
    <p>Are you Married? {this.marital}</p>
    <p>Are you claustrophobic? {this.claustrophobic}</p>
    <p>Do you have Cancer? {this.state.familyHistory.cancer}</p>
    <p>Do you have heart disease? {this.state.familyHistory.heartDisease}</p>
    <p>Do you have diabetes? {this.state.familyHistory.diabetes}</p>
    <p>Living Relatives Siblings: {this.state.living.siblings} Parents: {this.state.living.parents} Grandparents: {this.state.living.grandparents}</p>
    <p>Number of Siblings: {this.state.siblingsNum} Parents: {this.state.parentsNum} Grandparents: {this.state.grandparentsNum} </p>
    <li>Highest form of education
      <ul>Highschool: {this.state.highSchool}</ul>
      <ul>associates: {this.state.associate}</ul>
      <ul>Bachelors: {this.state.bachelors}</ul>
      <ul>masters: {this.state.masters}</ul>
      <ul>PHD: {this.state.phd}</ul>
      <ul>other:{this.state.other}</ul>
      <ul>other reason: {this.state.otherTextbox}</ul>
      </li>
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
