import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Base from "../../Base/Base";

function UpdateTeacher({teacherdata, setTeacherdata}) {
    const {id} = useParams();
    const editTeacher = teacherdata[id]
    const history = useHistory()

    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const [skills, setSkills] = useState("")

    useEffect(()=>{
        //console.log(id)
        setName(editTeacher.name)
        setGender(editTeacher.gender)
        setQualification(editTeacher.qualification)
        setSkills(editTeacher.skills)
    }, [id])

    // function updateTeacher() {
    //     const updatedObject = {
    //         name : name,
    //         batch : batch,
    //         gender : gender,
    //         qualification : qualification
    //     }
    //     console.log(updatedObject)
    //     teacherdata[id] = updatedObject
    //     setTeacherdata([...teacherdata])
    //     history.push("/teachers")
    // }

    async function updateTeacher() {
        const updatedObject = {
          name: name,
          gender: gender,
          qualification: qualification,
          skills: skills
        }
        const response = await fetch(`https://64577d930c15cb148209d986.mockapi.io/users/${editTeacher.id}`, {
          method: "PUT",
          body: JSON.stringify(updatedObject),
          headers: {
            "Content-Type": "application/json"
          }
        })
    
        const data = await response.json()
        if (data) {
          //console.log(updatedObject)
          teacherdata[id] = updatedObject
          setTeacherdata([...teacherdata])
          history.push("/teachers")
        }
      }

    return (
        <Base>
        <div className="editentry">
            
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

            <button className="edit-button"
            onClick={updateTeacher}
            >Update Teacher</button>
        </div>
        </Base>
        
    );
}

export default UpdateTeacher