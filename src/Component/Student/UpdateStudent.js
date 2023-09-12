import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Base from "../../Base/Base";

function UpdateStudent({studentdata, setStudentdata}) {
    const {id} = useParams();
    const editStudent = studentdata[id]
    const history = useHistory()

    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")

    useEffect(()=>{
        console.log(id)
        setName(editStudent.name)
        setBatch(editStudent.batch)
        setGender(editStudent.gender)
        setQualification(editStudent.qualification)
    }, [id])

    // function updateStudent() {
    //     const updatedObject = {
    //         name : name,
    //         batch : batch,
    //         gender : gender,
    //         qualification : qualification
    //     }
    //     console.log(updatedObject)
    //     studentdata[id] = updatedObject
    //     setStudentdata([...studentdata])
    //     history.push("/students")
    // }

    async function updateStudent() {
        const updatedObject = {
          name: name,
          batch: batch,
          gender: gender,
          qualification: qualification
        }
        const response = await fetch(`https://64577d930c15cb148209d986.mockapi.io/students/${editStudent.id}`, {
          method: "PUT",
          body: JSON.stringify(updatedObject),
          headers: {
            "Content-Type": "application/json"
          }
        })
    
        const data = await response.json()
        if (data) {
          //console.log(updatedObject)
          studentdata[id] = updatedObject
          setStudentdata([...studentdata])
          history.push("/students")
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

            <button className="edit-button"
            onClick={updateStudent}
            >Update Student</button>
        </div>
        </Base>
        
    );
}

export default UpdateStudent