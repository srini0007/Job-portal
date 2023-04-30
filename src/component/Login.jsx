import React, { useState } from 'react'
import Card from './shared/Card'
function Login({account,username}) {
  const [Username,setUsername] = useState("");
  const [Password,setPassword] = useState("");
  const [Message,setMessage] = useState("");
  const handleSubmit = function(e){

      e.preventDefault();
      let n= account.length;
      let fail=true;
      for(let i=0;i<n;i++){
          if(account[i].username===Username.toLocaleLowerCase() && account[i].password===Password){
              fail=false;
              break;
          }
      }
      if(!fail){
        document.querySelector('.log').classList.add('disable_log');
        document.querySelector('.listing').classList.remove('disable_list');
        username(Username.toLocaleLowerCase());
      }
      else{
          setMessage("Incorrect Username/Password");
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
  <div className='log'>
      <Card>
          <h1>Login</h1>    
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

export default Login