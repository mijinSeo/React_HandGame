import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Box from './component/Box';

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

function App() {

  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect]=useState(null);
  const [result,setResult]=useState("");
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  
  };
  const randomChoice=()=>{
    let itemArray = Object.keys(choice);
    //객체에 키값만 뽑아서 Array로 만들어줌.
    console.log ("item array", itemArray)
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  const judgement =(user,computer)=>{
    console.log("user",user,"computer",computer);

    if (user.name === computer.name){
      return "tie";
    }else if (user.name === "Rock")
      return computer.name === "Scissors"? "win" :"lose";
    else if (user.name ==="Scissors")
      return computer.name ==="Paper"? "win" :"lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" :"lose";
  };

  return (
    <div className='body'>
      <div className='main'>
        <h1>Play Mini Game! </h1>
      </div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        <button className='fa-regular fa-hand-scissors fa-2x' onClick={() => play("scissors")}></button>
        <button className='fa-regular fa-hand-back-fist fa-2x' onClick={() => play("rock")}></button>
        <button className='fa-regular fa-hand fa-2x' onClick={() => play("paper")}></button>
      </div>
    </div>
  );
}

export default App;
