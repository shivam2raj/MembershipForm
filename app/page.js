/** @format */
"use client";
import Image from "next/image";
import sidebar from "public/images/bg-sidebar-desktop.svg";
import Info from "./Components/info";
import Stepbar from "./Components/stepbar";
import Selectplan from "./Components/Selectplan";
import { Addons } from "./Components/addons";
import { useState } from "react";
import Finishup from "./Components/finishup";


export default function Home() {
  const formtitles =[0,'info','selectplan','Addons','Finishup']
  const[page,setPage] = useState(1);
  const[formData, setformData] = useState({
    name:"",
    email:"",
    number:"",
    plan:"",
    tenure:false,
    onlineService:false,
    largeStorage:false,
    customProfile:false
  })



  // const [page1,setPageFromStepbar] = useState(1)

  const handleDataFromChild = (data) => {
    setPage(data);
  }


  const formDisplay = () => {
        switch (page) {
          case 1:
            return <Info formData={formData} setformData={setformData}/>;
          case 2:
            return <Selectplan formData={formData} setformData={setformData}/>;
          case 3:
            return <Addons formData={formData} setformData={setformData}/>;
          case 4:
            return <Finishup formData={formData} setformData={setformData} page={page} setPage={setPage} />;
          default:
            return null;
        }
  };
  return (
    <main className="ubuntu h-screen w-screen flex justify-center items-center bg-blue-100 text-black">
      <div className="container flex gap-20 bg-white w-[60vw] h-[82vh] p-2 rounded-md">
        <div className="side-bar w-[274px]">
          <Image src={sidebar} alt="bgc" priority className="absolute" />

              <Stepbar handleDivClick={handleDataFromChild} page={page}/>
        
        </div>
        <div className="form-container flex flex-col p-12 h-[82vh]">
         <div className="formDisplay flex-1">
                  {formDisplay()}
          </div> 

            <div className="prevNext flex">
              {/* prev button */}
               <div onClick={() => {setPage((currPage)=> currPage-1)}}  className="text-Coolgray font-bold flex justify-center items-center cursor-pointer hover:text-marineblue" style={{visibility:page==1?'hidden':''}}>Go Back</div>


              {/* next page button  */}
               <button onClick={() => {
                if(page===formtitles.length - 1)
                {
                  alert("Form Submitted");
                }
                else {
                  setPage((currPage) => currPage + 1);
                }
               }} disabled={formData.name.trim()==' ' || formData.email.trim()==' ' || formData.number.trim() ==' '} className="block ml-auto p-2 w-28 h-12 bg-purplishblue font-bold text-white rounded-md">{page===formtitles.length - 1 ? "Confirm" : "Next Page"}</button>
            
            </div>
            
        </div>
      </div>
    </main>
  );
}
