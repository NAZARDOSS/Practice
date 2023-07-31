import React, { useState } from "react";

function Comment () {

  const [profile, setProfile] = useState({
    author: "",
    text: "",
    time: "",
  });
  

  

    const [author,setAuthor] = useState("");
    const [text,setText]     = useState("");
    const [time,setTime]     = useState("")

    const [updatedProfile, setUpdatedProfile] = useState({});
    
    function sending ({user}) {
      return (
          
        
        <article>
          <div class="author">
              <h6>{user.author}</h6>
          </div>
  
          <div> 
              <h5>{user.text}</h5>
          </div>
  
          <div>
            <h6>{user.time}</h6>
          </div>
        </article>
      );
    }

    const sendForm = (e) => {
        e.preventDefault();
        console.log();
      };

      const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdatedProfile({ ...updatedProfile, [name]: value });
      };

    return(
      <div>
  
        <form onSubmit={sendForm}>
          <hr />
          <label>
            Enter the author of comment 
            <input
              type="text"
              name="Author"
              value={author}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Send your text
            <input
              type="text"
              name="text"
              value={text}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Write the time of sending
            <input
              type="text"
              name="time"
              value={time}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
          <br />
          
      </form>
     </div> 
    )
}
export default Comment;