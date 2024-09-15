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
      return "https://s.isanook.com/ca/0/ui/285/1425863/456297891_524049350135160_3920066301112261792_n.jpg";
    } else {
      return "https://shopping.moointer.com/wp-content/uploads/2019/12/%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%80%E0%B8%94%E0%B9%89%E0%B8%87.png";
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
      <img src="src/image/grass.png" alt="หญ้า"  onClick={() => foodPig(5)}/>
      <img src="src/image/melon.jpg" alt="เเตงโม" onClick={() => foodPig(15)} />
      <img src="src/image/pumpkin.jpg" alt="ฟักทอง" onClick={() => foodPig(25)}/>
    </div>
    <div className="but">
      <button onClick={reset}>รีเซ็ต</button>
    </div>
  </>
  );
}


