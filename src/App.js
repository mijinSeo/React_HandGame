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

  const [userSelect,setUserSelect] = useState(null)

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
  }

  return (
    <div>
      <div className='main'>
        <Box title="YOU" item={userSelect}/>
        {/* <Box title="COMPUTER"/> */}
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
