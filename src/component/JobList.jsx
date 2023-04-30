import React, { useRef, useState } from 'react'
// import Card from './shared/Card'
import Add from './Add'

function JobList({post,user,AddJob,reorder,AddIntrest}) {
    const dragItem = useRef();
    const dragOverItem = useRef();
    let curDate = new Date();
    const [archive,setArchive] = useState([]);
    const startDrag = function(e,pos){
        dragItem.current=pos;
        console.log(pos)

    }
    const dragEnter = (e,pos)=>{
        dragOverItem.current=pos;
        console.log(pos)
    }

    const dragDrop = (e) =>{
        reorder(dragItem.current,dragOverItem.current);
        dragItem.current=null;
        dragOverItem.current=null;
    }
    const handleSubmit = (e,index)=>{
        // console.log(index);
        AddIntrest(user,index);
    }

    const handleArchive = function(e,index){
        let n=archive.length;
        console.log(index)
        if(e.target.checked===true){
            let found=0;
            for(let i=0;i<n;i++){
                if(archive[i]===index){
                    found=1;
                    break;
                }
            }
            if(!found){
                let temp = [...archive];
                temp.push(index);
                setArchive(temp);
            }
        }
        else{
            let temp= [];
            for(let i=0;i<n;i++){
                if(archive[i]!==index){
                    temp.push(archive[i]);
                }
            }
            setArchive(temp);
        }
        console.log(archive);
    }
    let eligible =function(index){
        let n=archive.length;
        for(let i=0;i<n;i++){
            if(archive[i]===index){
                // console.log("f")
                return false;
            }
        }
        // console.log("t")
        return true;
    }

    let toggled = function(index){
        let n=archive.length;
        for(let i=0;i<n;i++){
            if(archive[i]===index){
                // console.log("f")
                return true;
            }
        }
        // console.log("t")
        return false;
    }
    const perDay=24*60*60*1000;

  return (
    <div className='listing disable_list'>
        <Add user={user} AddJob={AddJob}></Add>
        <h1 className='job_title'>
            List of Jobs
        </h1>
        {post.map((item,index)=>(
            <div className={`card 
            ${Math.floor((item.date-curDate)/perDay)>=0 && Math.floor((item.date-curDate)/perDay)<=2 && 'bgred'}
            ${Math.floor((item.date-curDate)/perDay)>=3 && Math.floor((item.date-curDate)/perDay)<=13 && 'bgyellow'}
            ${Math.floor((item.date-curDate)/perDay)>=14 && 'bggreen'}
            ${!eligible(index) &&user!=="admin" && 'hide'}
            ` } 
            key={item.id}
             draggable ={user==="admin"} 
             onDragStart={(e)=>startDrag(e,index)} 
             onDragEnter={(e)=>dragEnter(e,index)} 
             onDragEnd={(e)=>dragDrop(e)}>
                <h2>
                    {item.title}
                </h2>
                <div className="description">
                    Details: {item.description}
                </div>
                <div className="loc">
                    Location: {item.Location}
                </div>
                <div className='date'>
                    Date : {item.date.toDateString()}
                </div>
                <div className="contact">
                    Contact No:{item.phoneNo}
                </div>
                <div className="contact">
                    Email ID: {item.mail}
                </div>
                {user!=="admin" && Math.floor((item.date-curDate)/perDay)>=0  && 
                <button className='but but2' onClick={(e)=>handleSubmit(e,index)}>intrested?</button>
                }
                {user==="admin" && item.intrest!==undefined && (
                    <div className="intrest">
                        Intrested : 
                        {item.intrest.map(names=>(
                            <span className="names">
                                {" "+names}
                            </span>
                        ))}
                    </div>
                )}
                {user==="admin" && (
                    <div className='archive'>
                    <span><b>Archive: </b></span>
                    {toggled(index) && (
                        <label className="switch">
                        <input type="checkbox" className={`check `}  onChange={(e)=>handleArchive(e,index)} checked />
                        <span className="slider round"></span>
                    </label>
                    )}
                    {!toggled(index) && (
                        <label className="switch">
                        <input type="checkbox" className={`check `}  onChange={(e)=>handleArchive(e,index)} />
                        <span className="slider round"></span>
                    </label>
                    )}
                    
                    </div>
                )}
            </div>
        ))}

    </div>
  )
}

export default JobList