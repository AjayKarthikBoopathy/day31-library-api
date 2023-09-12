import React, { useEffect, useState } from 'react';
import './App.css';

import Students from './Component/Student/Students';
import AddStudent from './Component/Student/AddStudent';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import UpdateStudent from './Component/Student/UpdateStudent';
import Teachers from './Component/Teacher/Teachers';
import AddTeacher from './Component/Teacher/AddTeacher';
import UpdateTeacher from './Component/Teacher/UpdateTeacher';
import Base from './Base/Base';

import Nopage from './Base/Nopage';
import { Redirect } from 'react-router-dom';




function App() {
  const [studentdata, setStudentdata] = useState([])
  const [teacherdata, setTeacherdata] = useState([])
  
  //const history = useHistory()

  
  

  useEffect(()=>{
    const getStudents = async () =>{
        const response = await fetch("https://64577d930c15cb148209d986.mockapi.io/students", {
          method:"GET",
        }); 
        const data1 = await response.json();
        if(data1){
          setStudentdata(data1)
          //console.log(studentdata)
        }
    }
    getStudents();

    const getTeachers = async () =>{
      const response = await fetch("https://64577d930c15cb148209d986.mockapi.io/users", {
        method:"GET",
      }); 
      const data2 = await response.json();
      if(data2){
        setTeacherdata(data2)
        //console.log(teacherdata)
      }
  }
  getTeachers();
  }, [])



  return (
    <div className="App">

    
    
    <Switch>

      <Route exact path="/">
        <Base>    
        <div className='line1'>
          <h3>Welcome to the Library Website.</h3>
        </div>
        <div className='line2'>
          <h3>Check our Students & Teachers data here...</h3>
        </div>
        </Base>
      </Route>

      <Route path="/students">
             
        <Students
          studentdata={studentdata}
          setStudentdata={setStudentdata}
        />
      </Route>

      <Route path="/add-student">
        <AddStudent
          studentdata={studentdata}
          setStudentdata={setStudentdata}
        />
      </Route>

      <Route path="/edit-student/:id">
        <UpdateStudent
          studentdata={studentdata}
          setStudentdata={setStudentdata}
        />
      </Route>

      

      <Route path="/teachers">
             
        <Teachers
          teacherdata={teacherdata}
          setTeacherdata={setTeacherdata}
        />
      </Route>

      <Route path="/add-teacher">
        <AddTeacher
          teacherdata={teacherdata}
          setTeacherdata={setTeacherdata}
        />
      </Route>

      <Route path="/edit-teacher/:id">
        <UpdateTeacher
          teacherdata={teacherdata}
          setTeacherdata={setTeacherdata}
        />
      </Route>

      <Route path="/details">
          <Redirect to ="/" />
      </Route>

      <Route path="**">
          <Nopage/>
      </Route>


    </Switch>

    </div>
  );
}

export default App;
