import { allStudent } from "./allStudent";
import Student from "./student";

const StudentList=({studentList})=>{
      return(
        <>
         <div className="App">
         
         {
           studentList.map((element,index)=>{
              return <Student {...element} key={index}/>
            })
         }
        
         </div>
        </>
      )




}

export default StudentList;




    