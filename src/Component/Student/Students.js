import React from "react";
import { useHistory } from "react-router-dom";
import Base from "../../Base/Base";
//import data from './Data/data';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Icon, Typography } from "@mui/material";

function Students({studentdata,setStudentdata}) {
    
    const history = useHistory()
    

    // delete functionality
    const deleteStudent = async (studId) => {

        const response = await fetch(`https://64577d930c15cb148209d986.mockapi.io/students/${studId}`, {
            method: "DELETE",
        });

        const data = await response.json()
        if (data) {
            const remainingStudents =
                studentdata.filter((stud, idx) => stud.id !== studId)
                //console.log(remainingStudents)
            setStudentdata([...remainingStudents])
            //history.push("/students")
        }
    }

    return (
        <Base>
        <Box>
        <div className="newuser">

        <Button
        sx={{bgcolor:"#bdbdbd", color:"#e57373", height:33, width:130, pr:2}}
        
        onClick={()=>history.push("/add-student")}>
            <Icon sx={{mb:1.5}}><AddIcon/></Icon>
            <Typography fontWeight="400">Student</Typography>
        </Button>
        
        </div>


        <div className="card-container">
            
            {studentdata.map((stud, idx) => (
                <div className="card" key={idx}>
                        <div className="content">
                            <h3>{stud.name}</h3>
                            <p>{stud.batch}</p>
                            <p>{stud.gender}</p>
                            <p>{stud.qualification}</p>
                        </div>

                        <div className="control">
                           
                            <Button
                                sx={{bgcolor:"#7cb342", color:"white", mr:0.5}}
                                size="small"
                                onClick={() => history.push(`/edit-student/${idx}`)}
                            >
                            <EditIcon />
                            </Button>

                            <Button
                                sx={{bgcolor:"#ff5252", color:"white", ml:0.5}}
                                size="small"
                                onClick={() => deleteStudent(idx)}
                            >
                            <DeleteIcon />
                            </Button>
                        </div>
                        
                </div>
            ))}


        </div>
        </Box>
        </Base>
        
    );
}

export default Students;


