import { useState } from "react";

function Signup(){
    const initvalue={name:'',email:'',password:'',confirm_password:''}
    const [formvalue,setformvalue]=useState(initvalue);

    const handlechange=(e)=>{
        setformvalue({...formvalue, [e.target.name]:e.target.value})
        
    }
    console.log(formvalue.email)
    return(
        <div>
            <br/>
            <form>
                <label>Name</label>
                <input type={'text'} name="name" value={formvalue.name} onChange={handlechange}/>
                <label>email</label>
                <input type={'text'} name="email" value={formvalue.email} onChange={handlechange}/>
                <label>password</label>
                <input type={'text'} name="password" value={formvalue.password} onChange={handlechange}/>
                <label>Confirm password</label>
                <input type={'text'} name="confirm_password" value={formvalue.confirm_password}  onChange={handlechange}/>
            </form>
        </div>
    )
}

export default Signup;