import React, { useState } from "react";

function AgeCalc() {
  const [date, setDate] = useState("");
  const [checked, setChecked] = useState(false);
  const [age, setAge] = useState("");

  let currentDate = new Date();

  const handleChange = (e) => {
    setChecked(!checked);
  };

  const sendForm = (e) => {
    e.preventDefault();
    let birthday = new Date(date);
    let ageInMilliseconds = currentDate - birthday;
    let fullAge = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    let ageInYear = fullAge.toFixed(1).split(".")[0];
    setAge(ageInYear);
  };

  return (
    <form onSubmit={sendForm}>
      <hr />
      <label>
        Enter your date of birthday(like day.month.year)
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Remember me
      </label>
      <button>Submit</button>
      <br />
      <p>Your age is: {age}</p>
    </form>
  );
}

export default AgeCalc;
