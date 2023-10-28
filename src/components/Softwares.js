import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Softwares = () => {

const [softwares, setSoftwares] = useState(null);

useEffect( ()=> {
    
    const fetchdata = async() => {

        try{
            const response = await axios.get("/api/softwares.json");
            setSoftwares(response.data);
            console.log(softwares);

        }catch(error){ console.log(error) }
    }
    fetchdata();
    })

useEffect(()=>{
    
},[softwares])
    



  return(
    <div className="container-fluid ">

        <div>
            <h1 className="text-center mb-4 pt-4"> softwares </h1>
        </div>

    
	    <div>
            <div className="row justify-content-center" >
            { softwares ? (softwares.slice(0,4).map( item => (
                <div className="col-xl p-2 col-lg-6  align-items-center zoom " key={item.ID}>
                    <div className="softwares_item d-flex">
                        <img src={"img/products/softwares/" + item.ID + ".jpg"} width="108" height="108" className="border p-2 rounded shadow" alt="softwares"/>
                        <div className="info text-left m-2 ">
                            
                                <ul>
                                    <li> {item.Name} </li>
                                </ul>
                            
                        </div>
                    </div>
                </div>
            ))):(<p> loading </p>)}
            </div> 
             {/* endof 1st row */}

            
            <div className="row justify-content-center" >
                { softwares ? (softwares.slice(4).map( item => (
                <div className="col-xl col-lg-6 p-2  align-items-center zoom" key={item.ID}>
                    <div className="softwares_item d-flex">
                        <img src={"img/products/softwares/" + item.ID + ".jpg"} width="108" height="108" className="border p-2 rounded shadow" alt="softwares"/>
                        <div className="info text-left m-2">
                            
                                <ul>
                                    <li> {item.Name} </li>
                                </ul>
                            
                        </div>
                    </div>
                    
                </div>
                ))):(<p> loading </p>)} 
            </div>
            
		
	    </div>
    </div>
  )
} 

export default Softwares;
