import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import "./App.css";

function Likes() {

const [count, setCount] = useState(0);

  const likes = () => {
    setCount(count + 1)
  }

return(
    <div>
    <Button onClick={likes}>likes</Button>
      <p>{count}</p>
      </div>
)
}
export default Likes;