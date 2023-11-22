import { allTeacher } from "./allTeacher";
import Teacher from "./teacherCard";

const TeacherList=({teacherList})=>{
   return(

    <>
    <div className="App">
      
   {
        TeacherList.map((element,index)=>{
            return <Teacher {...element} key={index} />
        })

         }
    </div>
     </>

   )
}
export default TeacherList;
