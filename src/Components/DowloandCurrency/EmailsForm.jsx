import React from "react";
import { useState } from "react";
import ImageSvg from "@/helpers/ImageSVG";
  

export default function EmailsForm({setHaveEmails}) {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
    
  };

  const handleAddEmails = () => {
    const emailList = email.split(/[ ,;]+/); // Expresión regular para separar por espacios, comas y puntos y comas
    const validEmails = [];
    const invalidEmails = [];

    emailList?.forEach((singleEmail) => {
      const trimmedEmail = singleEmail.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@ñ]+$/i;

      if (emailRegex.test(trimmedEmail)) {
        if (!emails.includes(trimmedEmail)) {
          validEmails.push(trimmedEmail);
        }
      } else {
        invalidEmails.push(trimmedEmail);
      }
    });

    setEmails([...emails, ...validEmails]);
    setEmail("");
   
    setError(invalidEmails.length > 0 ? `The following emails are invalid: ${invalidEmails.join(", ")}` : "");
    setTimeout(function() {
      setError("");
    }, 10000);
  };

  const handleDelete = (index) => {
    const updatedEmails = [...emails];
    updatedEmails.splice(index, 1);
    setEmails(updatedEmails);
  };

  const handleSendEmails = () => {
    // Aquí puedes realizar la lógica para enviar los correos electrónicos al servidor
    console.log("Correos electrónicos enviados:", emails);
    setHaveEmails(emails);
  };

  return (
    <div className="emailsFormContainer">
      
      <form className="form-container" onSubmit={(e) => e.preventDefault()}>
        <div className="emailBox"> 
       
        <div className="input-box">
          
            <textarea
            value={email}
            onChange={handleChange}
            placeholder=''
            // placeholder="Introduce uno o varios correos electrónicos separados por espacios, comas o puntos y comas"
            rows={4} // Adjust the number of visible rows as needed
            cols={40} // Adjust the number of visible columns as needed
          />
          <label htmlFor=""> Add emails </label>
        </div>
      <div>
      <button type="button" className="btn_black" onClick={handleAddEmails}>
          + Add
        </button> 
      </div>
       
        </div>
     
     
        {error && <p className="errorMessage">{error}</p>}

      </form>
      {emails.length > 0 && (
        <div className="listEmails">
          <p>Added Emails:</p>
          
          <ul className="ListEmails">
            {emails?.map((email, index) => (
              <li key={index}>
                {email} <button  onClick={() => handleDelete(index)}> <ImageSvg name="Delete" /></button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {emails.length > 0 && <button  className="btn_primary" onClick={handleSendEmails}>Save and continue</button>}
    </div>
  );
}