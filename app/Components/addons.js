/** @format */
import { useState, useEffect } from "react";

export default function Addons({formData,setformData}) {

    
    const[checkbox1,setCheckbox1] = useState(false);
    const[checkbox2,setCheckbox2] = useState(false);
    const[checkbox3,setCheckbox3] = useState(false);
  

    const handleCheckbox1Change = () => {
      formData.onlineService = checkbox1
      setCheckbox1(!checkbox1);
      setformData({...formData, onlineService: !checkbox1})
    };
  
    const handleCheckbox2Change = () => {
      formData.largeStorage = checkbox2
      setCheckbox2(!checkbox2);
      setformData({...formData, largestorage: !checkbox2})
    };
  
    const handleCheckbox3Change = () => {
      formData.customProfile = checkbox3;
      setCheckbox3(!checkbox3);
      setformData({...formData, customProfile: !checkbox3});
    };
    

  return (
    <div className="w-96">
      <h1 className="text-[32px] text-marineblue ">Pick add-ons</h1>
      <p className="text-Coolgray">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="button-container mt-8">
        {/* first button  */}
        <div onClick={() => handleCheckbox1Change()} style={{backgroundColor: formData.onlineService === true ? 'hsl(229, 24%, 87%)':'white'}} tabIndex={0} className="button1 w-96 h-20 p-4 border flex gap-6 rounded-md mb-4 border-purplishblue cursor-pointer">
          <div className="flex justify-center items-center ">
            <input type="checkbox" checked={formData.onlineService} onChange={handleCheckbox1Change} className="h-4 w-4 rounded-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-purplishblue leading-4">
              Online Service
            </p>
            <p className="text-Coolgray">Access to multiplayer games</p>
          </div>

          <p className="text-purplishblue block ml-auto">+1$/mo</p>
        </div>

        {/* second button  */}
        <div onClick={() => handleCheckbox2Change()} style={{backgroundColor: formData.largeStorage === true ? 'hsl(229, 24%, 87%)':'white'}} tabIndex={0} className="button2 w-96 h-20 p-4 border flex gap-6 rounded-md mb-4 border-purplishblue cursor-pointer">
          <div className="flex justify-center items-center ">
            <input type="checkbox" checked={formData.largeStorage} onChange={handleCheckbox2Change}  className="h-4 w-4 rounded-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-purplishblue leading-4">
            Larger storage
            </p>
            <p className="text-Coolgray">Extra 1TB of cloud save</p>
          </div>

          <p className="text-purplishblue block ml-auto">+2$/mo</p>
        </div>

        {/* third button  */}
        <div onClick={() => handleCheckbox3Change()} style={{backgroundColor: formData.customProfile === true ? 'hsl(229, 24%, 87%)':'white'}} tabIndex={0} className="button3 w-96 h-20 p-4 border flex gap-6 rounded-md mb-4 border-purplishblue cursor-pointer">
          <div className="flex justify-center items-center ">
            <input type="checkbox" checked={formData.customProfile} onChange={handleCheckbox3Change}  className="h-4 w-4 rounded-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-purplishblue leading-4">
            Customizable Profile
            </p>
            <p className="text-Coolgray">Custom theme on your profile</p>
          </div>

          <p className="text-purplishblue block ml-auto">+2$/mo</p>
        </div>
      </div>
    </div>
  );
}
