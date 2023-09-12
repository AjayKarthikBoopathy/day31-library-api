import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Base from "../../Base/Base";


function AddTeacher({teacherdata,setTeacherdata}) {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const [skills, setSkills] = useState("")
    const history = useHistory()


    const createTeacher = async () => {
        // creating object from input states
        const newTeacher = {
          name: name,
          gender: gender,
          qualification: qualification,
          skills: skills
        }
    
        const response = await fetch("https://64577d930c15cb148209d986.mockapi.io/users", {
          method: "POST",
          body: JSON.stringify(newTeacher),
          headers: {
            "Content-Type": "application/json"
          },
        })
        const data = await response.json()
        setTeacherdata([...teacherdata, data])
        history.push("/teachers")
        
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
            <input className="input"
            placeholder="Enter Skills"
            type="text"
            value={skills}
            onChange={(e)=>setSkills(e.target.value)}
            />

            <button className="add-button"
            onClick={createTeacher}
            >Add new Teacher</button>
        </div>
        </Base>
        
    );
}

export default AddTeacher