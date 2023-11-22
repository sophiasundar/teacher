import './App.css';
import StudentList from './Components/studentList';
import { allStudent } from './Components/allStudent';
// import { useState } from 'react';
// import { Routes,Route } from 'react-router-dom';
import Student from './Components/student';



function App() {
  // const [studentList,setStudentList]=useState(allStudent)
  return (
    <div className="App">
     
      <StudentList studentList={StudentList}/>


    </div>
  );
}

export default App;
