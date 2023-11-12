/** @format */

import { useState, useEffect } from "react";


export default function Finishup({formData, setformData, page, setPage}) {
    let short = "";
    let onlineServicesPrice = 0;
    let largeStoragePrice = 0;
    let customProfilePrice = 0;

    if(formData.tenure==true)
    {
        short= "$/yr";
       onlineServicesPrice = formData.onlineService?8:0;
     largeStoragePrice = formData.largeStorage?15:0;
     customProfilePrice = formData.customProfile?15:0;
    }
    else
    {
         short = "$/mo";
        onlineServicesPrice = formData.onlineService?1:0;
    largeStoragePrice = formData.largeStorage?2:0;
     customProfilePrice = formData.customProfile?2:0;
    }
    

    const [planPrice, setPlanPrice] = useState(0)

    
    const [planName, setPlanName] = useState("Plan");

    useEffect(() => {
      // This useEffect will trigger whenever formData.plan changes
      if (formData.plan === 'button1') {
        setPlanName("Arcade");
        setPlanPrice(formData.tenure?90:9);
      } else if (formData.plan === 'button2') {
        setPlanName("Advanced");
        setPlanPrice(formData.tenure?120:12);
      } else if (formData.plan === 'button3') {
        setPlanName("Pro");
        setPlanPrice(formData.tenure?150:15);
      } else {
        setPlanName("Plan");
        setPlanPrice(0); // Handle the default case or set a default value
      }
    }, [formData.plan]);
  
  


    let totalPrice = planPrice + onlineServicesPrice + largeStoragePrice + customProfilePrice;
    
  return (
    <div className="w-96">
      <h1 className="text-[32px] text-marineblue ">Finishing up</h1>
      <p className="text-Coolgray">
        Double-check everything looks OK before confirming.
      </p>

      <div className="container mt-8 p-4 bg-Magnolia">
        <div className="plan-container h-16 flex border-b-2 border-Lightgray">
          <div className="div1 flex-1">
            <p className="text-marineblue font-semibold text-md">
              {planName} ({formData.tenure==true?"Yearly":"Monthly"})
            </p>
            <p onClick={()=> setPage(2)} className="text-purplishblue underline cursor-pointer">change</p>
          </div>
          <div className="flex justify-center items-center">

            <div className="font-semibold text-marineblue justify-items-center">
              {planPrice + " " + short}
            </div>
          </div>
        </div>

        {formData.onlineService?<div className="Addon-container mt-3 flex">
          <div className="div1 flex-1">
            <p className="font-semibold text-md text-Coolgray">Online Services</p>
          </div>
          <div className="font-semibold text-marineblue justify-items-center">
          {onlineServicesPrice + " " + short}
          </div>
         </div>: ('')
        } 

        {formData.largeStorage? (<div className="Addon-container mt-3 flex">
            <div className="div1 flex-1">
              <p className="font-semibold text-md text-Coolgray">Larger Storage</p>
            </div>
            <div className="font-semibold text-marineblue justify-items-center">
            {largeStoragePrice + " " + short}
            </div>
          </div>) : ('')
            }
            
        {formData.customProfile ? (<div className="Addon-container mt-3 flex">
            <div className="div1 flex-1">
              <p className="font-semibold text-md text-Coolgray">Customisable Profile</p>
            </div>
            <div className="font-semibold text-marineblue justify-items-center">
            {customProfilePrice + " " + short}
            </div>
          </div>) : ('')
            }


      </div>
      <div className="total-container mt-3 p-4 h-16 flex bg-white">
      <div className="div1 flex-1">
            <p className="text-Coolgray font-semibold text-md">
                Total (per {formData.tenure==true?"year":"month"})
            </p>
          </div>
          <div className="font-semibold text-xl text-marineblue justify-items-center">
            {totalPrice + " " + short}
          </div>
      </div>
    </div>
  );
}
