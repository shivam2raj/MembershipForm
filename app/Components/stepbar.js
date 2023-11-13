import steps from "steps.json";
import { useState } from "react";

export default function Stepbar (props) {

  const[notClicked, clicked] = useState(null);


  const handleDivClick = (title) => {
    clicked(title);
    props.handleDivClick(title);
  }

    return (
      <div className="step-bar flex flex-col gap-4 relative p-8 text-white uppercase cursor-pointer">
         
         {steps.map((steps) => (
          <div key={steps.steps} className="" onClick={()=>handleDivClick(steps.steps)}>
           <div className="steps flex gap-2 leading-5 w-40 cursor-pointer">
             <div className="h-10 w-10 border rounded-full flex justify-center items-center" style={{backgroundColor: notClicked===steps.steps?"hsl(217, 100%, 97%)":" ", color:notClicked==steps.steps?'black':'white',backgroundColor: props.page===steps.steps?"hsl(217, 100%, 97%)":" ", color:props.page==steps.steps?'black':'white'}}>
               {steps.steps}
             </div>
             <div>
               <p className="block font-extralight text-[75%] text-slate-400 ">
                 Step {steps.steps}
               </p>{" "}
               <p className="font-semibold text-[14px] tracking-wider">
                 {steps.title}
               </p>
             </div>
           </div>
           </div>
         ))}
       
     </div>
      
    )
}