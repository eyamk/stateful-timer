import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system';
import './timer.css'

 class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      second: 0,
      minute:0,
      hour:0,
      isOn: false,
      start: 0
     
    }
     this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this) 
  }
  startTimer() {
    this.setState({
      isOn: true,
      second: this.state.second,
      minute: this.state.minute,
      hour: this.state.hour,
      //start: Date.now() - this.state.second,
    
    })
    this.timer = setInterval(() =>{if (this.state.second<59) {this.setState((state)=> {
      return {second:this.state.second + 1};
  })}

   else if(this.state.second===59) {
   this.setState(()=>{  return {minute:this.state.minute + 1,time:this.state.second=0};
})}
if(this.state.minute===59) {
  this.setState(()=>{  return {hour:this.state.hour + 1,minute:this.state.minute=0,second:this.state.second=0};
})}
  }, 1000);
   }


  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({second: 0, isOn: false})
   
    this.setState({minute: 0, isOn: false})
    this.setState({hour: 0, isOn: false})
  }
  render() {
    let start = (this.state.second == 0 && this.state.minute == 0 && this.state.hour == 0) ?
    <button onClick={this.startTimer}>start</button> : null
    let stop = (this.state.second == 0 || !this.state.isOn) ? null : <button onClick={this.stopTimer}>stop</button>
    let resume = (this.state.second == 0 || this.state.isOn) ? null : <button onClick={this.startTimer}>resume</button>
    let reset = (this.state.second == 0 || this.state.isOn) ? null : <button onClick={this.resetTimer}>reset</button>
    return(
      <div>
    
        {/* <div>{(this.state.hour)}:{(this.state.minute)}:{(this.state.time)}</div> */}
        <div>
        <Container>
  <Row>
    <Col sm={2}>
    </Col>
    <Col sm={8} className="times" >
     
     <div>{(this.state.hour)}:{(this.state.minute)}:{(this.state.second)}</div>
    </Col>
    <Col sm={2}>
    </Col>
  </Row>
  <Row>
    <Col sm={2}>
    </Col>
    <Col sm={8} className="time" >
        <div className="hour">Hour</div>
     <div className="minute">Minute</div>
     <div className="second">Second</div>
     </Col>
    <Col sm={2}>
    </Col>
  </Row>
</Container>
    </div>
        {start}
        {resume}
        {stop}
        {reset}
        
      </div>
    )
  }
} 

   
  
export default Timer