import React, { Component } from 'react'
import BoxClass from './component/BoxClass';


const choice = {
    rock:{
      name:"Rock",
      img:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA4MDNfMTMz%2FMDAxNTY0NzYwNzgzNTc5.IDoDifAZWaIBVHYogyt76QPh2A9Yu7bOSIVCcbaMHpwg.kl7Y22eAl083g2wDm0mrxtEfeUNefTQlF__cuHsTkwEg.JPEG.dmsdhr6807%2FIMG_7776.jpg&type=sc960_832"
    },
      scissors:{
      name:"Scissors",
      img:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130129_261%2Fia2hvpwhj_13594395228608x1G2_JPEG%2FB1B82.jpg&type=sc960_832"
    },
    paper:{
      name:"Paper",
      img:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110505_190%2Fjokangjoo_1304596368233NufQG_JPEG%2Fa44.jpg&type=sc960_832"
    }
  }

export default class AppClass extends Component {
    constructor(){
        super()
        this.state={
           userSelect:null,
           computerSelect:null,
           result:""

        };
    }

    play =(userChoice) => {
        let computerChoice =this.randomChoice();
        this.setState({
            userSelect:choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(choice[userChoice],computerChoice)

        });
    };
    randomChoice =() =>{
        let itemArray = Object.keys(choice);
        let randomItem =Math.floor(Math.random()*itemArray.length)
        let final = itemArray[randomItem];
        return choice[final];
    }

    judgement =(user, computer) =>{
        if (user.name === computer.name){
            return "tie";
          }else if (user.name === "Rock")
            return computer.name === "Scissors"? "win" :"lose";
          else if (user.name ==="Scissors")
            return computer.name ==="Paper"? "win" :"lose";
          else if (user.name === "Paper")
            return computer.name === "Rock" ? "win" :"lose";
    }

  render() {
    return (
        <div className='body'>
        <div className='main'>
          <h1>Play Mini Game! </h1>
        </div>
        <div className='main'>
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result}/>
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result}/>
        </div>
        <div className='main'>
          <button className='fa-regular fa-hand-scissors fa-2x' onClick={() => this.play("scissors")}></button>
          <button className='fa-regular fa-hand-back-fist fa-2x' onClick={() =>  this.play("rock")}></button>
          <button className='fa-regular fa-hand fa-2x' onClick={() =>  this.play("paper")}></button>
        </div>
      </div>
      
    )
  }
}

