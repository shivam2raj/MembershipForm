import advancedIcon from "public/images/icon-advanced.svg";
import arcadeIcon from "public/images/icon-arcade.svg";
import proIcon from "public/images/icon-pro.svg";
import Image from "next/image";
import { useState } from "react";
import Switch from "react-switch";

export default function ({formData,setformData}) {
    const [focusedButton, setFocusedButton] = useState(null);

  const handleButtonFocus = (buttonId) => {
    setFocusedButton(buttonId);
    formData.plan = buttonId;
  };


  const [isSwitchOn, setSwitchOn] = useState(false);


  const handleToggle = () => {
    formData.tenure = isSwitchOn;
    setSwitchOn(!isSwitchOn);
    setformData({...formData, tenure:!isSwitchOn});


  };

    return (
<div className="w-96"> 
            <h1 className="text-[32px] text-marineblue ">Select your plan</h1>
  <p className="text-Coolgray">You have the option of monthly or yearly billing.</p>

  <div className="button-container mt-8 flex gap-5">

    {/* 1st tile  */}
    <div className="p-2 border-2 h-32 w-28 rounded-md cursor-pointer" tabIndex={0} onFocus={() => handleButtonFocus('button1')}
        style={{ outline: formData.plan === 'button1' ? '2px solid blue' : 'none', backgroundColor: formData.plan === 'button1'? 'hsl(217, 100%, 97%)': 'white'}} >
      <Image src={arcadeIcon} alt="arcade icon"/>
      <p className="text-marineblue font-semibold mt-8 leading-5">Arcade</p>
      <p className="text-Coolgray text-sm">9$/mo</p>
    </div>

    {/* 2nd tile  */}
    <div className="p-2 border-2 h-32 w-28 rounded-md cursor-pointer" tabIndex={0} onFocus={() => handleButtonFocus('button2')}
        style={{ outline: formData.plan === 'button2' ? '2px solid blue' : 'none', backgroundColor: formData.plan === 'button2'? 'hsl(217, 100%, 97%)': 'white'}}>
      <Image src={advancedIcon} alt="advanced icon"/>
      <p className="text-marineblue font-semibold mt-8 leading-5">Advanced</p>
      <p className="text-Coolgray text-sm">12$/mo</p>
    </div>

    {/* 3rd tile  */}
    <div className="p-2 border-2 h-32 w-28 rounded-md cursor-pointer" tabIndex={0} onFocus={() => handleButtonFocus('button3')}
        style={{ outline: formData.plan === 'button3' ? '2px solid blue' : 'none', backgroundColor: formData.plan === 'button3'? 'hsl(217, 100%, 97%)': 'white' }}>
      <Image src={proIcon} alt="pro icon"/>
      <p className="text-marineblue font-semibold mt-8 leading-5">Pro</p>
      <p className="text-Coolgray text-sm">15$/mo</p>
    </div>

   </div>

   <div className="switch h-12 bg-Magnolia flex justify-center items-center gap-6 rounded-md mt-8">
    <p className="font-semibold" style={{color:isSwitchOn==false?"#01386a":"hsl(231, 11%, 63%)"}}>Monthly</p>
      <Switch onChange={handleToggle}
          checked={formData.tenure} checkedIcon={false} uncheckedIcon={false} onColor="#01386a"
          offColor="#01386a"/>
          {/* {console.log(isSwitchOn)} */}
          <p className="font-semibold" style={{color:isSwitchOn==true?"#01386a":"hsl(231, 11%, 63%)"}}> Yearly</p>
    </div>

</div>
    )
}