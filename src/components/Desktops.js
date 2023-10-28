import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Desktops = () => {

    const [desktops, setDesktops] = useState(null);

    useEffect( ()=> {
    
    const fetchdata = async() => {

        try{
            const response = await axios.get("/api/desktops.json");
            setDesktops(response.data);
            console.log(desktops);

        }catch(error){ console.log(error) }
    }
    fetchdata();
    })

    useEffect(()=>{
    
    },[desktops])

  return (
    <div className="container-fluid ">

        <div>
            <h1 className="text-center mb-4 pt-4"> Desktops </h1>
        </div>

    
	    <div>
            <div className="row justify-content-center" >
            { desktops ? (desktops.slice(0,4).map( item => (
                <div className="col-xl p-2 col-lg-6  align-items-center zoom " key={item.ID}>
                    <div className="desktops_item d-flex">
                        <img src={"img/products/desktops/" + item.ID + ".jpg"} width="108" height="108" className="border p-2 rounded shadow" alt="imagem desktops"/>
                        <div className="info text-left m-2 ">
                            
                                <ul>
                                    <li> {item.Name} </li>
                                    <li> {item.Processor}</li>
                                    <li> {item.RAM} </li>
                                    <li> {item.HD}</li>
                                </ul>
                            
                        </div>
                    </div>
                </div>
            ))):(<p> loading </p>)}
            </div> 
             {/* endof 1st row */}

            
            <div className="row justify-content-center" >
                { desktops ? (desktops.slice(4).map( item => (
                <div className="col-xl col-lg-6 p-2  align-items-center zoom" key={item.ID}>
                    <div className="desktops_item d-flex">
                        <img src={"img/products/desktops/" + item.ID + ".jpg"} width="108" height="108" className="border p-2 rounded shadow" alt="imagem desktops"/>
                        <div className="info text-left m-2">
                            
                                <ul>
                                    <li> {item.Name} </li>
                                    <li> Processor: Core i9</li>
                                    <li> RAM: 16Gb 1333 DDR4 </li>
                                    <li> HD SSD 980Gb SanDisk</li>
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

export default Desktops
