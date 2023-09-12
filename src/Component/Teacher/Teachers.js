import React from "react";
import { useHistory } from "react-router-dom";
import Base from "../../Base/Base";
//import data from './Data/data';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Icon, Typography } from "@mui/material";

function Teachers({teacherdata,setTeacherdata}) {
    
    const history = useHistory()
    

    // delete functionality
    const deleteTeacher = async (userId) => {

        const response = await fetch(`https://64577d930c15cb148209d986.mockapi.io/users/${userId}`, {
            method: "DELETE",
        });

        const data = await response.json()
        if (data) {
            const remainingTeachers =
                teacherdata.filter((user, idx) => user.id !== userId)
                //console.log(remainingTeachers)
            setTeacherdata([...remainingTeachers])
            //history.push("/teachers")
        }
    }

    return (
        <Base>
        <div className="newuser">

        <Button
        sx={{bgcolor:"#bdbdbd", color:"#e57373", height:33, width:130, pr:2}}
        onClick={()=>history.push("/add-teacher")}>
            <Icon sx={{mb:1.5}}><AddIcon/></Icon>
            <Typography fontWeight="400">Teacher</Typography>
        </Button>
        
        </div>


        <div className="card-container">
            
            {teacherdata.map((user, idx) => (
                <div className="card2" key={idx}>
                        <div className="content">
                            <h3>{user.name}</h3>
                            <p>{user.gender}</p>
                            <p>{user.qualification}</p>
                            <p>{user.skills}</p>
                        </div>

                        <div className="control">
                           
                            <Button
                                sx={{bgcolor:"#7cb342", color:"white", mr:0.5}}
                                size="small"
                                onClick={() => history.push(`/edit-teacher/${idx}`)}
                            >
                            <EditIcon />
                            </Button>

                            <Button
                                sx={{bgcolor:"#ff5252", color:"white", ml:0.5}}
                                size="small"
                                onClick={() => deleteTeacher(idx)}
                            >
                            <DeleteIcon />
                            </Button>
                        </div>
                        
                </div>
            ))}


        </div>
        </Base>
        
    );
}

export default Teachers;


