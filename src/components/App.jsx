import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  const handleChange = (event) => {
    event.target.name === "fName"
      ? setFullName({ fName: event.target.value, lName: fullName.lName })
      : setFullName({ fName: fullName.fName, lName: event.target.value });
  };

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          value={fullName.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={handleChange}
          value={fullName.lName}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
