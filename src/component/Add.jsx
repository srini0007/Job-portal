import React, { useState } from 'react'
import Card from './shared/Card'
// import {v4 as uuidv4} from "uuid"

function Add({user,AddJob}) {
    const [title,setTitle] =useState("");
    const [description,setDescription] =useState("");
    const [location,setLocation] =useState("");
    const [date,setDate] =useState("");
    const [phone,setPhone] =useState("");
    const [mail,setMail] =useState("");
    const handleSubmit = function(e){
        e.preventDefault();
        let newJob= {
            id:-1,
            title:title,
            description:description,
            Location: location,
            date:new Date(date),
            phoneNo:phone,
            mail:mail
        };
        AddJob(newJob);
        
    }
    const handleTextChange1 = function(e){
        setTitle(e.target.value);
    }
    const handleTextChange2 = function(e){
        setDescription(e.target.value);
    }
    const handleTextChange3 = function(e){
        setLocation(e.target.value);

    }
    const handleTextChange4 = function(e){
        setDate(e.target.value);

    }
    const handleTextChange5 = function(e){
        setPhone(e.target.value);
    }
    const handleTextChange6 = function(e){
        setMail(e.target.value);
    }
    
  return (
    <div className={`adminAddJob ${(user!=="admin") && "addJob"}`}>
        <Card>
            <h1>ADD Job</h1>    
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="field">
                    <br/>
                    <label>title </label>
                
                    <input placeholder='type here' 
                    className='inp' 
                    onChange={(e)=>handleTextChange1(e)} 
                    required>
                    </input>
                    <br/>
                </div>
                <div className="field">
                    <br/>
                    <label>description </label>
                    <input placeholder='type here' 
                    className='inp' 
                    onChange={(e)=>handleTextChange2(e)} 
                    required>
                    </input>
                    <br/>
                </div>
                <div className="field">
                    <br/>
                    <label>Location </label>
                    <input placeholder='type here' 
                    className='inp' 
                    onChange={(e)=>handleTextChange3(e)} 
                    required>
                    </input>
                    <br/>
                </div>
                <div className="field">
                    <br/>
                    <label>Date </label>
                    <input type='Date'
                    className='inp' 
                    onChange={(e)=>handleTextChange4(e)} 
                    required>
                    </input>
                    <br/>
                </div>
                <div className="field">
                    <br/>
                    <label>Contact No: </label>
                    <input type="number"placeholder='type here' 
                    className='inp' 
                    onChange={(e)=>handleTextChange5(e)} 
                    required>
                    </input>
                    <br/>
                </div>
                <div className="field">
                    <br/>
                    <label>Email ID: </label>
                    <input type='email' placeholder='type here' 
                    className='inp' 
                    onChange={(e)=>handleTextChange6(e)} 
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
        </Card>
    </div>
  )
}

export default Add