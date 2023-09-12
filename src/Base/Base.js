import { Box, Button, FormControl, Icon, InputLabel, MenuItem, Select } from "@mui/material";

import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import HomeIcon from '@mui/icons-material/Home';



const Base = ({children}) => {
    const history = useHistory();

    // const lists = ["students", "teachers"]

    // function handleChange(value) {
    //     const listValue = value;
    //     //console.log(listValue)
    //     history.push(`/${listValue}`)  
    // }


    const listUser = "";

  const handleChange2 = (event) => {
    const endpoint=event.target.value;
    history.push(`/${endpoint}`)
  };
    
    return (
        <Box sx={{width:"100%"}}>
        <div className='main-component base-component'>
  
            <div className="heading-lists">
                <Box sx={{ml:14, display: {xs: "none", sm: "block"} }}>
                <h3 className="title">Library Portal</h3>
                </Box>

                <Box sx={{ml:4, display: {xs: "block", sm: "none"} }}>
                <h3 className="title1">Library Portal</h3>
                </Box>

                {/* <div>
                <button className="list-button"
                onClick={()=>history.push("/")}
                ><h4>Home</h4></button>
                </div> */}

                {/* <div>
                <button className="list-button"
                onClick={()=>history.push("/students")}
                ><h4>Students-List</h4></button>
                </div>

                <div>
                <button className="list-button"
                onClick={()=>history.push("/teachers")}
                ><h4>Teachers-List</h4></button>
                </div> */}
            <div className="nav-items">
                <Box sx={{mt:0.8}}>
                    <Button 
                    onClick={()=>history.push("/")}>
                        <Icon>
                            <HomeIcon sx={{ color:"#e0e0e0"}}/>
                        </Icon>
                    </Button>
                </Box>

                <Box>
                    
                <FormControl sx={{ m: 1, minWidth: 90 }} size="small">
                    <InputLabel id="demo-select-small-label">User</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={listUser}
                        label="User"
                        onChange={handleChange2}
                    >
                        <MenuItem value={"students"}>Student</MenuItem>
                        <MenuItem value={"teachers"}>Teacher</MenuItem>
                    </Select>
                </FormControl>
                </Box>
            </div>
  
            </div>


            <main className='main-segment'>
               
               <div>
                 {children}
               </div>
           </main>

           
      </div>
      </Box>
    )
}

export default Base;

