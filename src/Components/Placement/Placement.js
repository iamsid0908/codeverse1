import { useEffect, useState} from "react"
import React from 'react'

function Placement() {
    const [placement, setPlacement] = useState([]);
    const [topic, setTopic] = useState("");
    const [description, setDesc] = useState("");
    const [img, setImg] = useState("");

    const user={topic,description,img};
 




useEffect(() => {
  
    fetch('http://localhost:3001/api/placement')
    .then(res=>res.json())
    .then(response=>{
        console.log(response)
        setPlacement(response)
    })
    .catch(err=>{
        console.log(err);
    })

}, [])

const handleChange=(e)=>{
    e.preventDefault();
    console.log(user);

    fetch('http://localhost:3001/api/placement',{
        method:'POST',
        body:JSON.stringify(user),
        mode:'cors',
          headers:{
            'Content-type':'application/json'
          }
    })
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err)
    })
     window.location.reload(false);
    
}

  return (
    <>
    <div>
        <div>
            <lable>Topic</lable>
            <input type="text" placeholder="Topic" onChange={(e)=>{
                setTopic(e.target.value);
            }}/>

            <lable>Description</lable>
            <input type="text" placeholder="Description" onChange={(e)=>{
                setDesc(e.target.value);
            }}/>

            <label>Image-link</label>
            <input type="text" placeholder='image-link' onChange={(e)=>{
                setImg(e.target.value);
            }}/>
            <button onClick={handleChange}> submit</button>

        </div>
      
    </div>

    <div>
        {
            placement.map(data=>(
                <>
                <h1>{data.topic}</h1>
                <p>{data.description}</p>
                <img src={data.img} width="250px" height="200px"></img>
                </>
            ))

        }
    </div>
    </>
  )
}

export default Placement
