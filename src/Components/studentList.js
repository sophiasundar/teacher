import { allStudent } from "./allStudent";
import Student from "./student";

const StudentList=()=>{
      return(
        <>
         <div className="App">
         
         {
           allStudent.map((element,index)=>{
              return <Student {...element} key={index}/>
            })
         }
        
         </div>
        </>
      )




}

export default StudentList;




    