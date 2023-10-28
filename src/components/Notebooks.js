import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Notebooks = () => {

const [notebooks, setNotebooks] = useState(null);

useEffect( ()=> {
    
    const fetchdata = async() => {

        try{
            const response = await axios.get("/api/notebooks.json");
            setNotebooks(response.data);
            console.log(notebooks);

        }catch(error){ console.log(error) }
    }
    fetchdata();
    })

useEffect(()=>{
    
},[notebooks])
    



  return(
    <div className="container-fluid ">

        <div>
            <h1 className="text-center mb-4 pt-4"> Notebooks </h1>
        </div>

    
	    <div>
            <div className="row justify-content-center" >
            { notebooks ? (notebooks.slice(0,4).map( item => (
                <div className="col-xl p-2 col-lg-6  align-items-center zoom " key={item.ID}>
                    <div className="notebooks_item d-flex">
                        <img src={"img/products/notebooks/" + item.ID + ".jpg"} width="108" height="108" className="border p-2 rounded shadow" alt="imagem notebook"/>
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
                { notebooks ? (notebooks.slice(4).map( item => (
                <div className="col-xl col-lg-6 p-2  align-items-center zoom" key={item.ID}>
                    <div className="notebooks_item d-flex">
                        <img src={"img/products/notebooks/" + item.ID + ".jpg"} width="108" height="108" className="border p-2 rounded shadow" alt="imagem notebook"/>
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
  ) //endof return
} //endof Notebooks

export default Notebooks;
