import './App.css';
import StudentList from './Components/studentList';
import { allStudent } from './Components/allStudent';
// import { useState } from 'react';
// import { Routes,Route } from 'react-router-dom';
import Student from './Components/student';
import { Sidebar } from 'semantic-ui-react';
import * as React from 'react';


function App() {
  // const [studentList,setStudentList]=useState(allStudent)
  return (
    <div className="App">
     
      <StudentList />
       

    </div>
  );
}

export default App;
