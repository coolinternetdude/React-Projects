import { useState } from "react";
export function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      //   currData[fieldName] = value;
      //   return { ...currData };
      // Using the computer name property
      return { ...currData, [changedField]: newValue };
    });
  };

  const submitForm = () => {
    console.log(
      `User ${formData.firstName} ${formData.lastName} has been created`
    );
  };
  return (
    <div>
      <label htmlFor="firstname">First Name: </label>
      <input
        type="text"
        placeholder="first name..."
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        id="firstname"
      />
      <label htmlFor="lastname">Last Name: </label>
      <input
        type="text"
        placeholder="last name..."
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        id="lastname"
      />
      <label htmlFor="password">Password: </label>
      <input
        type="text"
        placeholder="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        id="password"
      />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}
