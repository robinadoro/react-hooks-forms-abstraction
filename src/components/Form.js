import React, { useState } from "react";

function Form() {
  const [formData, setFormData]= useState({firstName:"John", lastName:"Henry"})


  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    // setFirstName(event.target.value);
    setFormData({...formData, firstName:event.target.value,});
  }

  function handleLastNameChange(event) {
    // setLastName(event.target.value);
    setFormData({...formData, lastName:event.target.value,});
  }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={formData.firstName} />
      <input type="text" onChange={handleLastNameChange} value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
