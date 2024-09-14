import { useState } from "react";
import "./App.css";

export default function App(){
  const[level,setLevel]=useState(1);
  const [size, setSize] = useState(100);
  
  //ให้อาหาร
  const foodPig = (foodValue) => {
    setLevel((prevLevel) => prevLevel + foodValue);
    setSize((prevSize) => prevSize + foodValue);  
  };
  const getPigImage = () => {
    if (level < 100) {
      return "./image/pig.jpg";
    } else {
      return "./image/tae.jpg";
    }
  };
  const imageSrc = `${getPigImage()}?t=${Date.now()}`;
  
  const reset = () => {
    setLevel(1);
    setSize(100); //รีเกม
  };
  return (
   <>
    <div className="pig">
      <h1>level{level}</h1>
      <img src={imageSrc} alt="น้องหมูเด้ง" style={{ width: size, height: size }}/>
    </div>

    <div className="food">
      <img src="./image/grass.png" alt="หญ้า"  onClick={() => foodPig(5)}/>
      <img src="./image/melon.jpg" alt="เเตงโม" onClick={() => foodPig(15)} />
      <img src="./image/pumpkin.jpg" alt="ฟักทอง" onClick={() => foodPig(25)}/>
    </div>
    <div className="but">
      <button onClick={reset}>รีเซ็ต</button>
    </div>
  </>
  );
}


