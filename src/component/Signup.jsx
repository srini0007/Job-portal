import React, { useState } from 'react'
import Card from './shared/Card'

function Signup({account,handleAdd}) {
    const [Username,setUsername] = useState("");
    const [Password,setPassword] = useState("");
    const [Message,setMessage] = useState("");
    console.log(account);
    const handleSubmit = function(e){

        e.preventDefault();
        let n= account.length;
        let fail=false;
        for(let i=0;i<n;i++){
            // console.log(account[0].username+" "+Username);
            if(account[i].username===Username.toLowerCase()){
                fail=true;
            }
        }
        const new_account = {username:Username.toLowerCase(),password:Password};
        if(!fail){
            handleAdd(new_account);
            setMessage("Your account has been created");
        }
        else{
            setMessage("This username has already been used");
        }
    }

    const handleTextChange1 = function(e){
        setUsername(e.target.value);
        setMessage("");

    }
    const handleTextChange2 = function(e){
        setPassword(e.target.value);
        setMessage("");
    }
  return (
    <div className='sign disable_sign'>
        <Card>
            <h1>Sign Up</h1>    
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <br/>
                    <label>UserName </label>
                
                    <input placeholder='type here' 
                    className='inp' 
                    onChange={(e)=>handleTextChange1(e)} 
                    required>
                    </input>
                    <br/>
                </div>
                <div className="field">
                    <br/>
                    <label>Password </label>
                    <input placeholder='type here' 
                    type="password"
                    className='inp' 
                    onChange={(e)=>handleTextChange2(e)} 
                    required>
                    
                    </input>
                    <br/>
                </div>
                <div className="submit">
                    <button className="but auth_submit">
                        Submit
                    </button>
                </div>
            </form>
            <div className="msg">
                {Message}
            </div>
        </Card>
    </div>
  )
}

export default Signup