import { useState, useEffect} from "react";

export default function Info({formData, setformData}) {

    const [formErrors, setFormErrors] = useState({
        name:'',
        email:'',
        number:'',
    });

    useEffect(() => {
        // Use useEffect to watch for changes in formData
        const errors = {};
    
        // Check for required fields
        if (formData.name.trim() === '') {
          errors.name = 'Name is required';
        }
        if (formData.email.trim() === '') {
          errors.email = 'This Field is required';
        }
        if (formData.number.trim() === '') {
          errors.number = 'This Field is required';
        }
    
        // Update the state with errors
        setFormErrors(errors);
      }, [formData]);

    return (
    <div className="personal w-96">
    <h1 className="ml-[-2px] text-[32px] text-marineblue font-bold">Personal info</h1> 
    <p className="text-Coolgray mb-6">Please provide your name, email address, and phone
    number.</p> 
    <div className="flex h-1">
    <span className="flex-1  text-sm font-medium text-marineblue">Name</span>
    <span className="text-red-500 text-sm font-medium">{formErrors.name}</span>
    </div>
    <br />
    <input type="text" placeholder="e.g. Stephen King" value={formData.name}
        onChange={(e) => {
          setformData({ ...formData, name: e.target.value});}} className="mt-[2px] mb-4  h-10 p-2 border-[1px] w-full rounded-md text-marineblue font-semibold outline-purplishblue outline-[0.25px]"/> <br /> 
    <div className="flex h-1">
    <span className="flex-1  text-sm font-medium text-marineblue">Email Address</span>
    <span className="text-red-500 text-sm self-start font-medium">{formErrors.email}</span>
    </div>
    <br />
    <input type="email" placeholder="stephenking@lorem.com" value={formData.email}
        onChange={(e) => {
          setformData({ ...formData, email: e.target.value});}} className="mt-[2px] mb-4 h-10 p-2 border w-full rounded-md text-marineblue font-semibold  outline-purplishblue outline-[0.25px]" /> <br />
     <div className="flex h-1">
    <span className="flex-1  text-sm font-medium text-marineblue">Phone Number</span>
    <span className="text-red-500 text-sm font-medium">{formErrors.number}</span>
    </div>
     <br />
     <input type="number" placeholder="+1 234 567 890" value={formData.number}
        onChange={(e) => {
          setformData({ ...formData, number: e.target.value});}} className="mt-[2px] mb-4 h-10 p-2 border w-full rounded-md text-marineblue font-semibold  outline-purplishblue outline-[0.25px]"/> <br />
     
     </div>

    )
}