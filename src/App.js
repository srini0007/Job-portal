import Header from "./component/Header";
import Signup from "./component/Signup";
import Login from "./component/Login";
import admin from "./data/AdminAccount";
import { useState } from "react";
import JobList from "./component/JobList";
import JobListing from "./data/JobListing";

function App() {

  const [account,setAccount]= useState(admin);
  const [currentUser,setCurrentUser] = useState("");
  const [Jobs,setJob] = useState(JobListing);

  const AddAccount =function(new_account){
    setAccount([new_account,...account]);
  }

  const submitedName = function(username){
    setCurrentUser(username);
  } 

  const AddJob = function(newJob){
    newJob.id= Jobs.length;
    setJob([newJob,...Jobs]);
  }

  const reorder = function(pos1,pos2){
    const copyListItems = [...Jobs];
    const dragItemContent = copyListItems[pos1];
    copyListItems.splice(pos1, 1);
    copyListItems.splice(pos2, 0, dragItemContent);
    setJob(copyListItems);
  }

  const AddIntrested = function(name,pos){
    let curJob= Jobs[pos];
    // console.log(curJob.intrest===undefined);
    if(curJob.intrest!==undefined){
      let fail=false;
      for(let i=0;i<curJob.intrest.length;i++){
        if(curJob.intrest[i]===name){
          fail=true;
          break;
        }
      }
      if(!fail){
        Jobs[pos].intrest.push(name);
      }
    }
    else{
      Jobs[pos].intrest=[name];
    }

  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="wrap">
          <Signup account={account} handleAdd={AddAccount}/>
          <Login account={account} username ={submitedName}/>
          <JobList post={Jobs} user={currentUser} AddJob={AddJob} reorder={reorder} AddIntrest ={AddIntrested}/>
        </div>
      </div>
    </>
  );
}

export default App;
