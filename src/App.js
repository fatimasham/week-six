import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {

  const [cafe, setCafe] = useState(0);
  const {id, name, description, image} = data[cafe];
  const [showMore, setShowMore] = useState(false);


  const previousCafe = () => {
    setCafe((cafe => {
      cafe --;
      if (cafe < 0) {
        return data.length - 1;
      }
      return cafe;
    }))
  }

  const nextCafe = () => {
    setCafe((cafe => {
      cafe ++;
      if (cafe > data.length - 1) {
        cafe = 0;
      }
      return cafe;
    }))

  }

return(<div>

  <div className="container">
    <h1>THE MOST BEAUTIFUL CAFES YOU MUST VISIT IN BALI</h1>
  </div>

  <div className="container">
    <img src={image} width="500px" alt="cafe"/>
  </div>

  <div className="container">
    <h2>{id} - {name}</h2>
  </div>

  <div className="btn container">
    <button className="prevNext" onClick={previousCafe}>Previous</button>
    <button className="prevNext" onClick={nextCafe}>Next</button>
  </div>

  <div className="container">
    <h3>{showMore ? description : description.substring(0,220) + "...."}
    <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
    </h3>
  </div>

</div>
)
}

export default App;
 