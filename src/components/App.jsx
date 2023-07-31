import React from "react";
import Post from "./Post";
import Button from "./Button";
import AgeCalc from "./LoginForm";
import Profile from "./Profile";
import Comment from "./Comment";


function App() {
  return (
    <div className="App" >
   
      <Post />
      <Button style="background: black"onClick ={(event)=>{console.log(event)}} />
      <AgeCalc />
      <hr />
      <Profile />
      <Comment />
      <button 
          onMouseLeave={(event)=>{console.log("Mouse leave")}}
          onMouseEnter={(event)=>{console.log("Mouse On")}}
        >some</button>
    </div>
  );
    
}

Button.defaultProps = {
  text: "колличество нажатий",
};
export default App;
