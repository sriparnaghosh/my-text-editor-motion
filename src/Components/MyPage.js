//import React from 'react';
import styled from 'styled-components';
//import ReactAccelerometer from 'react-accelerometer'
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'





/* Combining React-Accelerometer with React-Motion */




const TextAreaInputContainer = styled.textarea`
    margin-top: 1%;
    margin-bottom: 2%;
    width: 100%;
    height: 30vmin;
    border-radius: 3px;
    float:right;
    //height: 30%;
    padding-top: 5px;
    padding-left: 10px;
    resize: none;
    background-color: #fff;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    box-shadow: 0 0 4px #c4c4c4;
    font-weight: 200;
    display: block;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
  `;
  const MyButton = styled.button`
    box-sizing: border-box;
    background-color: #01B0A2;
    color: #ffffff;
    border: 1px solid #37ada7;
    width: 100px;
    margin-top: 1%;
    margin-bottom: 2%;
    font-size: 13px;
    height: 25px;
    border-radius: 4px;
    margin: auto;

    display: block;
    position: relative;
    //margin-right:3px;
`;



class MyPage extends React.Component
{
	state = {
		input_text: null,
		pastPresentArray: [],
		undoCount: 0,
		redoCount: 0,
		count: 0,
		x: null,
		y:null,
		z:null

	};




	componentDidMount() {


		//window.addEventListener('devicemotion', this.handleOrientationEventTest2);



	}
	componentWillUnmount(){

      //window.removeEventListener('devicemotion', this.handleOrientationEventTest2);



    }
	handleOrientationEventTest2 = (event) =>{

		var x = event.alpha;
	    var y = event.gamma;
	    var z = event.beta;

		/*var x = event.accelerationIncludingGravity.x;
	    var y = event.accelerationIncludingGravity.y;
	    var z = event.accelerationIncludingGravity.z;*/
	    this.setState({x:x,y:y,z:z})



	}


	handleMotionEvent = (event) => {
		var x = event.acceleration.x;
        var y = event.acceleration.y;
        var z = event.acceleration.z;
	    this.setState({x:x,y:y,z:z})



        if((x > 10 || y > 10 || x < -10 || y < -10) && z < 5 && z > -5){
            this.redo()

        }
        else if((x > 5 || y > 5 || x < -5 || y < -5) && z < 5 && z > -5){

            this.undo()

        }

	}

	deviceMotion = (event) => {
      event.preventDefault()
      DeviceMotionEvent.requestPermission()
			.then(response => {
			  if (response === 'granted') {
			    window.addEventListener('devicemotion', this.handleMotionEvent)
			  }
			  else this.setState({x: response})
			})
			.catch(console.error)

	 /*DeviceOrientationEvent.requestPermission()
			.then(response => {
			  if (response === 'granted') {
			    window.addEventListener('deviceorientation', this.handleOrientationEventTest2)
			  }
			  else this.setState({x: response})
			})
			.catch(console.error)*/




    }

	handleChange = (event) => {
		event.preventDefault()
      //this.setState( event.target.value);
      let content = this.state;
      content[event.target.name] = event.target.value;
      content.pastPresentArray.push(content[event.target.name])
      content['count'] = content['count'] + 1
      console.log(this.state);
      this.setState(content);

    }
    undo = () => {
      //event.preventDefault()

      //this.setState( event.target.value);
      let content = this.state;
      content.count = content.count < 0 ? -1 : content.count - 1;
      //content.undoCount = content.undoCount + 1
      let popedWord = content.pastPresentArray[content.count];

      //content[event.target.name] = event.target.value;
      content["input_text"] = content.count === -1 ? " " : popedWord
      this.setState(content);
      console.log(this.state,popedWord);

    }
    redo = () => {
      //event.preventDefault()

      //this.setState( event.target.value);
      let content = this.state;
      content.count = content.count >= content.pastPresentArray.length - 1 ? content.pastPresentArray.length - 1 : content.count + 1;
      //content.undoCount = content.count + 1
      let popedWord = content.pastPresentArray[content.count];

      //content[event.target.name] = event.target.value;
      content["input_text"] = popedWord
      this.setState(content);
      console.log(this.state,popedWord);

    }



	render() {
		return (
			<div>
			<MyButton onClick = {this.deviceMotion} style = {{height: "8vmin",width: "45%",cursor:"pointer", marginTop: "5%", marginLeft: "5%" ,margin: "auto" ,display: "block",marginBottom: "10%"}}>Start Demo</MyButton>
			<div>
				<TextAreaInputContainer name = "input_text" onChange = {this.handleChange} value={this.state.input_text} style = {{display: "inline-block"}}/>
				<MyButton onClick = {this.undo} style = {{cursor:"pointer", marginTop: "5%" ,display: "inline-block"}}>Undo</MyButton>
				<MyButton onClick = {this.redo} style = {{cursor:"pointer", marginTop: "5%", marginLeft: "5%"  ,display: "inline-block" }}>Redo</MyButton>
			</div>


			</div>
		);
	}
}

export default MyPage;
