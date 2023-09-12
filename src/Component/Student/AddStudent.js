import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Base from "../../Base/Base";


function AddStudent({studentdata,setStudentdata}) {
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const history = useHistory()


    const createStudent = async () => {
        // creating object from input states
        const newStudent = {
          name: name,
          batch: batch,
          gender: gender,
          qualification: qualification
        }
    
        const response = await fetch("https://64577d930c15cb148209d986.mockapi.io/students", {
          method: "POST",
          body: JSON.stringify(newStudent),
          headers: {
            "Content-Type": "application/json"
          },
        })
        const data = await response.json()
        setStudentdata([...studentdata, data])
        history.push("/students")
        
      }

    return (
        <Base>
        <div className="addentry">
            
            <input className="input"
            placeholder="Enter Name"
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input className="input"
            placeholder="Enter Batch"
            type="text"
            value={batch}
            onChange={(e)=>setBatch(e.target.value)}
            />
            <input className="input"
            placeholder="Enter Gender"
            type="text"
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
            />
            <input className="input"
            placeholder="Enter Qualification"
            type="text"
            value={qualification}
            onChange={(e)=>setQualification(e.target.value)}
            />

            <button className="add-button"
            onClick={createStudent}
            >Add new Student</button>
        </div>
        </Base>
        
    );
}

export default AddStudent