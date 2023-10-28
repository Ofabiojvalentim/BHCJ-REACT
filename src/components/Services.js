import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Services = () => {

    const [services, setServices] = useState(null);

useEffect( ()=> {
    
    const fetchdata = async() => {

        try{
            const response = await axios.get("/api/services.json");
            setServices(response.data);
            console.log(services);

        }catch(error){ console.log(error) }
    }
    fetchdata();
    })

    useEffect(()=>{
        
    },[services])

  return (
    <div className="container-fluid ">

        <div>
            <h1 class="text-center mb-4 pt-4 pb-4"> Services </h1>
        </div>


        <div className='px-2'>
            <div className="row justify-content-center mb-5" >
            { services ? (services.map( item => (
                <div className="col-sm-6 col-lg p-2 mb-5  zoom" key={item.ID}>
                    <div className="services align-items-center justify-content-center text-center p-2">
                        <img src={"img/services/" + item.ID + ".jpg"} width="208" height="108" className="border p-2 rounded shadow" alt="services"/>
                        <h3 class="text-center mt-2"> {item.Name} </h3>
                        <div className="info text-left m-2 ">
                            
                                <ul>
                                    
                                    <li> {item.Description} </li>
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

export default Services
